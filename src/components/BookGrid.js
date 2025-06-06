import React from 'react';
import Book from './Book';

const BookGrid = ({ books, onShelfChange, showShelfStatus = false }) => {
  return (
    <ol className="books-grid">
      {books.map((book) => (
        <li key={book.id}>
          <Book 
            book={book} 
            onShelfChange={onShelfChange} 
            showShelfStatus={showShelfStatus}
          />
        </li>
      ))}
    </ol>
  );
};

export default BookGrid;
