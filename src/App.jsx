// icons
import { BsFillTrash3Fill } from "react-icons/bs";

// layouts
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

// useState
import { useState } from "react";

function App() {
  const [items, setItems] = useState([
    { id: 1, item: "sauce", checked: false },
    { id: 2, item: "coke", checked: false },
    { id: 3, item: "noodles", checked: false },
  ]);

  items.map((item) => {
    console.log(item.item);
  });

  return (
    <>
      <Header />
      <div className="py-50px">
        <div className="container">
          {items.length ? (
            <ul className="groceries-list">
              {items.map((item) => {
                return (
                  <li className="groceries-list__item" key={item.id}>
                    <input className="checkbox" type="checkbox" id={item.id} />
                    <label className="label" htmlFor={item.id}>
                      {item.item.toUpperCase()}
                    </label>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="text-center">Your List Is Empty</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
