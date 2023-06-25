import { BsFillClipboardPlusFill } from "react-icons/bs";

function Form({ newInput, setNewInput, handleSetNewInput }) {
  return (
    <form className="form" onSubmit={handleSetNewInput}>
      <div className="wrapper">
        <div className="input-group">
          <label htmlFor="add-item" className="label">
            Add Item
          </label>
          <input
            className="input"
            type="text"
            name="add-item"
            id="add-item"
            placeholder="Item's name"
            autoFocus
            required
            value={newInput}
            onChange={(e) => setNewInput(e.target.value)}
          />
        </div>
        <button className="btn btn--add" aria-label="Add Item">
          <BsFillClipboardPlusFill />
        </button>
      </div>
    </form>
  );
}

export default Form;
