export const DataRow = ({ item, onEdit, onDelete }) => (
  <tr key={item.id}>
    <td>{item.name}</td>
    <td>
      <div className="row-gap">
        <button className="sm" onClick={() => onEdit(item)}>
          Edit
        </button>
        <button className="sm" onClick={() => onDelete(item)}>
          Delete
        </button>
      </div>
    </td>
  </tr>
);