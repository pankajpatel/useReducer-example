import { useReducer } from "react";
import { reducer, initialState } from "./reducer";
import { DataTable } from "./components/DataTable";
import { Modal } from "./components/Modal";
import { AddItemModal } from "./components/AddItemModal";
import "./styles.css";

export const MyApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const initEdit = (item) => dispatch({ type: "edit-item", payload: { item } });
  const initDelete = (item) =>
    dispatch({ type: "init-delete", payload: { item } });
  const initReset = () => dispatch({ type: "init-reset" });
  const deleteItem = () => dispatch({ type: "delete-item" });
  const hideModal = (name) =>
    dispatch({ type: "hide-modal", payload: { name } });

  const initAddNewItem = () => dispatch({ type: "init-add" });

  const updateValue = (val) =>
    dispatch({ type: "update-currently-editing", payload: { name: val } });

  return (
    <>
      <DataTable
        data={state.data}
        onAddNew={initAddNewItem}
        onEdit={initEdit}
        onDelete={initDelete}
      />
      {state.modals.map((item) => {
        if (item === "confirm-delete") {
          return (
            <Modal
              key={item}
              title="Confirm Delete?"
              onClose={() => hideModal("confirm-delete")}
              onConfirm={deleteItem}
            />
          );
        }
        if (item === "confirm-reset") {
          return (
            <Modal
              key={item}
              title="Confirm reset?"
              onClose={() => hideModal("confirm-reset")}
              onConfirm={() => dispatch({ type: "reset-editing-item" })}
            />
          );
        }
        if (item === "add-item") {
          return (
            <AddItemModal
              key={item}
              currentItem={state.currentlyEditing}
              onChange={updateValue}
              onClose={() => hideModal("add-item")}
              onReset={initReset}
              onSave={() => dispatch({ type: "save-currently-editing" })}
            />
          );
        }

        return null;
      })}
    </>
  );
};

export default MyApp;
