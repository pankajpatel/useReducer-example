import { DataRow } from "./DataRow";

export const DataTable = ({ data, onAddNew, onEdit, onDelete }) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item) => (
        <DataRow
          item={item}
          key={item.id}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
      <tr>
        <td colSpan={2} align="right">
          <button className="sm" onClick={onAddNew}>
            Add
          </button>
        </td>
      </tr>
    </tbody>
  </table>
);
