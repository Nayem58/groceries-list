import { BsFillClipboardPlusFill } from "react-icons/bs";

function Form({ className, newInput, setNewInput, handleSetNewInput }) {
  return (
    <form className={`add-item-form ${className}`} onSubmit={handleSetNewInput}>
      <div className="input-group">
        <label htmlFor="add-item"></label>
        <input
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
      <button className="btn" aria-label="Add Item">
        <BsFillClipboardPlusFill />
      </button>
    </form>
  );
}

export default Form;
