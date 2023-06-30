// layouts
import Header from "./layouts/Header";
import Block from "./layouts/Block";
import List from "./components/List";
import Form from "./components/Form";
import Search from "./components/Search";
import Footer from "./layouts/Footer";

// useState, useEffect
import { useState, useEffect } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [newInput, setNewInput] = useState("");
  const [fetchError, setFetchError] = useState(null);

  const API_URL = "http://localhost:3500/items11111";

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Did not receive expected data");
        const listItems = await response.json();
        console.log(listItems);
        setItems(listItems);
        setFetchError(null);
      } catch (error) {
        setFetchError(error.message);
      }
    };

    (async () => await fetchItems())();
  }, []);

  const addItem = (newItem) => {
    const createNewItem = {
      id: items.length ? items[items.length - 1].id + 1 : 1,
      item: newItem,
      checked: false,
    };

    const listItems = [...items, createNewItem];
    setItems(listItems);
  };

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
          {items.length ? (
            <Search search={search} setSearch={setSearch} />
          ) : null}
          <Form
            newInput={newInput}
            setNewInput={setNewInput}
            handleSetNewInput={handleSetNewInput}
          />
          {items.length ? (
            <List
              items={items.filter((item) =>
                item.item.toLowerCase().includes(search.toLowerCase())
              )}
              handleChecked={handleChecked}
              handleDelete={handleDelete}
            />
          ) : (
            <div className="text-center msg">Your List Is Empty</div>
          )}
        </Block>
        {fetchError && (
          <div className="text-center mb-10px">{`Error: ${fetchError}`}</div>
        )}
      </main>
      <Footer listCount={items.length} />
    </>
  );
}

export default App;
