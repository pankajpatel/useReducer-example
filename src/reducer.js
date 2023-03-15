const removeModal = (modals, modal) => modals.filter((item) => item !== modal);

export const reducer = (state, action) => {
  switch (action.type) {
    case "init-add":
      return {
        ...state,
        currentlyEditing: {},
        modals: [...state.modals, "add-item"]
      };
    case "edit-item":
      return {
        ...state,
        currentlyEditing: action.payload.item,
        modals: [...state.modals, "add-item"]
      };
    case "init-delete":
      return {
        ...state,
        modals: [...state.modals, "confirm-delete"],
        currentlyEditing: action.payload.item
      };
    case "delete-item":
      return {
        ...state,
        modals: removeModal(state.modals, "confirm-delete"),
        currentlyEditing: {},
        data: state.data.filter((item) => item.id !== state.currentlyEditing.id)
      };
    case "init-reset":
      return {
        ...state,
        modals: [...state.modals, "confirm-reset"]
      };
    case "reset-editing-item":
      return {
        ...state,
        modals: removeModal(state.modals, "confirm-reset"),
        currentlyEditing: {
          ...(state.data.find(({ id }) => state.currentlyEditing.id) ||
            initialState.currentlyEditing)
        }
      };
    case "show-modal":
      return { ...state, modals: [...state.modals, action.payload.name] };
    case "hide-modal":
      return {
        ...state,
        modals: removeModal(state.modals, action.payload.name)
      };
    case "update-currently-editing":
      return {
        ...state,
        currentlyEditing: { ...state.currentlyEditing, ...action.payload }
      };
    case "save-currently-editing":
      const { currentlyEditing } = state;
      const probableNewId = new Date().getTime();
      const data = state.data
        .concat(
          currentlyEditing.id
            ? []
            : [{ ...currentlyEditing, id: probableNewId }]
        )
        .map((item) =>
          item.id === currentlyEditing.id ? { ...currentlyEditing } : item
        );
      return {
        ...state,
        data,
        currentlyEditing: {},
        modals: removeModal(state.modals, "add-item")
      };
    default:
      return state;
  }
};

export const initialState = {
  data: [
    { name: "A", id: 1 },
    { name: "B", id: 2 }
  ],
  currentlyEditing: {},
  modals: []
};
