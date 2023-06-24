// icons
import { BsFillTrash3Fill } from "react-icons/bs";

// layouts
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

// useState
import { useState } from "react";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      item: "sauce",
      checked: false,
    },
    {
      id: 2,
      item: "coke",
      checked: true,
    },
    {
      id: 3,
      item: "noodles",
      checked: false,
    },
  ]);

  const handleChecked = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    setItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);

    setItems(listItems);
  };

  return (
    <>
      <Header />
      <main>
        <div className="py-50px">
          <div className="container">
            {items.length ? (
              <ul className="groceries-list">
                {items.map((item) => {
                  return (
                    <li className="groceries-list__item" key={item.id}>
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
                      <button
                        className="btn btn--delete"
                        onClick={() => handleDelete(item.id)}
                      >
                        <BsFillTrash3Fill />
                      </button>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="text-center">Your List Is Empty</p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
