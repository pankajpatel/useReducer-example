import { Modal } from "./Modal";

export const AddItemModal = ({
  currentItem = {},
  onClose,
  onChange,
  onReset,
  onSave
}) => (
  <Modal
    title={currentItem?.id ? "Edit item" : "Add new item"}
    onClose={onClose}
  >
    <input
      name=""
      value={currentItem.name || ""}
      onChange={(e) => onChange(e.currentTarget.value)}
    />
    <div className="row-gap">
      <button onClick={onReset}>Reset</button>
      <button onClick={onSave}>Save</button>
    </div>
  </Modal>
);
