import Header from "./layouts/Header";

import Block from "./layouts/Block";

import Form from "./components/Form";
import List from "./components/List";

import Footer from "./layouts/Footer";

import { useState } from "react";

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppingList"))
      ? JSON.parse(localStorage.getItem("shoppingList"))
      : {}
  );

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem("shoppingList", JSON.stringify(newItems));
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

  // Form
  const [newInput, setNewInput] = useState("");

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = {
      id,
      checked: false,
      item,
    };

    const listItems = [...items, addNewItem];
    setAndSaveItems(listItems);
  };

  const handleSetNewInput = (e) => {
    e.preventDefault();
    if (!newInput) return; // if blank or undefined is submitted, the function will exit out
    addItem(newInput);
    setNewInput(""); // on submit, the value will be reset as blank again
  };

  return (
    <>
      <Header headerTxt="Grocery List" />
      <main>
        <Block>
          <Form
            className="mb-20px"
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
            <h1 className="text-center">Your List Is Empty</h1>
          )}
        </Block>
      </main>
      <Footer listCount={items.length} />
    </>
  );
}

export default App;
