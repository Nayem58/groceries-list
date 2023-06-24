import ListItem from "./ListItem";

function List({ items, handleChecked, handleDelete }) {
  return (
    <ul className="groceries-list">
      {items.map((item) => {
        return (
          <ListItem
            key={item.id}
            item={item}
            handleChecked={handleChecked}
            handleDelete={handleDelete}
          />
        );
      })}
    </ul>
  );
}

export default List;
