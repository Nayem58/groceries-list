import React from "react";

function Search({ search, setSearch }) {
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
          role="searchbox"
          placeholder="Search item"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </form>
  );
}

export default Search;
