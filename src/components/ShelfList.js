import React from 'react';
import Shelf from './Shelf';

const ShelfList = ({ books, onShelfChange }) => {
  const shelves = [
    { id: 'currentlyReading', title: 'Currently Reading' },
    { id: 'wantToRead', title: 'Want to Read' },
    { id: 'read', title: 'Read' },
  ];

  return (
    <div className="list-books-content">
      <div>
        {shelves.map((shelf) => (
          <Shelf
            key={shelf.id}
            title={shelf.title}
            books={books.filter((book) => book.shelf === shelf.id)}
            onShelfChange={onShelfChange}
          />
        ))}
      </div>
    </div>
  );
};

export default ShelfList;
