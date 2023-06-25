import React from "react";

function Search() {
  return (
    <form className="form">
      <div className="input-group">
        <label htmlFor="search" className="label">
          Search
        </label>
        <input
          className="input"
          type="text"
          name="search"
          id="search"
          placeholder="Search item"
        />
      </div>
    </form>
  );
}

export default Search;
