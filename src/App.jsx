// layouts
import Header from "./layouts/Header";
import Block from "./layouts/Block";
import List from "./components/List";
import Form from "./components/Form";
import Search from "./components/Search";
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

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem("groceryList", JSON.stringify(newItems));
    console.log(newItems);
  };

  const addItem = (newItem) => {
    const createNewItem = {
      id: items.length ? items[items.length - 1].id + 1 : 1,
      item: newItem,
      checked: false,
    };

    const listItems = [...items, createNewItem];
    setAndSaveItems(listItems);
  };

  const handleChecked = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSaveItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
  };

  // taking new inputs from the Form
  const [newInput, setNewInput] = useState("");

  const handleSetNewInput = (e) => {
    e.preventDefault();
    if (!newInput) return;

    // add new item
    addItem(newInput);

    setNewInput("");
  };

  return (
    <>
      <Header headerTxt="Grocery List" />
      <main>
        <Block>
          <Search />
          <Form
            newInput={newInput}
            setNewInput={setNewInput}
            handleSetNewInput={handleSetNewInput}
          />
          {items.length ? (
            <List
              items={items}
              handleChecked={handleChecked}
              handleDelete={handleDelete}
            />
          ) : (
            <div className="text-center msg">Your List Is Empty</div>
          )}
        </Block>
      </main>
      <Footer listCount={items.length} />
    </>
  );
}

export default App;
