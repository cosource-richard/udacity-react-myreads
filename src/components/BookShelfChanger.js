import React from 'react';

const BookShelfChanger = ({ shelf, onShelfChange }) => {
  const handleChange = (e) => {
    onShelfChange(e.target.value);
  };

  return (
    <div className="book-shelf-changer">
      <select value={shelf || 'none'} onChange={handleChange}>
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default BookShelfChanger;
