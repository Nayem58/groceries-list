import { BsFillTrash3Fill } from "react-icons/bs";

function ListItem({ item, handleChecked, handleDelete }) {
  return (
    <li className="groceries-list__item">
      <input
        className="checkbox"
        type="checkbox"
        id={item.item}
        onChange={() => handleChecked(item.id)}
        checked={item.checked}
      />
      <label className="label" htmlFor={item.item}>
        {item.item.toUpperCase()}
      </label>
      <button className="btn-delete" onClick={() => handleDelete(item.id)}>
        <BsFillTrash3Fill aria-label={`Delete: ${item.item}`} />
      </button>
    </li>
  );
}

export default ListItem;
