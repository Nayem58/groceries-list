// layouts
import Header from "./layouts/Header";
import Block from "./layouts/Block";
import List from "./layouts/List";
import ListItem from "./layouts/List";
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
      checked: false,
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
    localStorage.setItem("groceryList", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("groceryList", JSON.stringify(listItems));
  };

  return (
    <>
      <Header headerTxt="Grocery List" />
      <main>
        <Block>
          {items.length ? (
            <List
              items={items}
              handleChecked={handleChecked}
              handleDelete={handleDelete}
            />
          ) : (
            <p className="text-center">Your List Is Empty</p>
          )}
        </Block>
      </main>
      <Footer listCount={items.length} />
    </>
  );
}

export default App;
