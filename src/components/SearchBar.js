import React from 'react';
import { Link } from 'react-router-dom';

const SearchBar = ({ query, onSearchChange }) => {
  return (
    <div className="search-books-bar">
      <Link to="/" className="close-search">
        Close
      </Link>
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title or author"
          value={query}
          onChange={onSearchChange}
          autoFocus
        />
      </div>
    </div>
  );
};

export default SearchBar;
