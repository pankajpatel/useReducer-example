import { useReducer } from "react";
import "./styles.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "open-modal":
      return { modal: action.payload.modal };
    case "close-modal":
      return { modal: null };
    default:
      return state;
  }
};

const Modal = ({ close, name }) => (
  <div role="dialog">
    <h3>{name} Modal</h3>
    <button onClick={close}>Close</button>
  </div>
);

export const MyApp = () => {
  const [state, dispatch] = useReducer(reducer, { modal: null });
  const openModal = (modal) =>
    dispatch({
      type: "open-modal",
      payload: { modal }
    });
  const closeModal = () => dispatch({ type: "close-modal" });
  return (
    <>
      {state.modal === "info" && <Modal close={closeModal} name="Info" />}
      {state.modal === "confirmation" && (
        <Modal close={closeModal} name="Confirmation" />
      )}

      <button onClick={() => openModal("info")}>Open Info Modal</button>
      <button onClick={() => openModal("confirmation")}>
        Open Confirmation Modal
      </button>
    </>
  );
};

export default MyApp;
