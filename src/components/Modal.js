export const Modal = ({ onClose, onConfirm, title, children = null }) => (
  <div className="backdrop">
    <div role="dialog">
      <div className="modal-header">
        <h3>{title}</h3>
        {onClose && (
          <button className="modal-close-button" onClick={onClose}>
            <span aria-label="Close" role="img">
              ✖️
            </span>
          </button>
        )}
      </div>
      {children}
      {onConfirm && (
        <div className="row-gap">
          {onConfirm && <button onClick={onConfirm}>Confirm</button>}
        </div>
      )}
    </div>
  </div>
);
