import React from 'react';
import BookShelfChanger from './BookShelfChanger';

const Book = ({ book, onShelfChange, showShelfStatus = false }) => {
  const { title, authors = [], imageLinks = {}, shelf = 'none' } = book;
  const coverStyle = {
    width: 128,
    height: 193,
    backgroundImage: `url("${imageLinks.thumbnail || ''}")`,
  };

  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={coverStyle}></div>
        <BookShelfChanger 
          shelf={shelf} 
          onShelfChange={(newShelf) => onShelfChange(book, newShelf)}
        />
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">
        {authors ? authors.join(', ') : 'Unknown Author'}
      </div>
      {showShelfStatus && shelf && shelf !== 'none' && (
        <div className="book-shelf-status">
          <span className="book-shelf-label">Shelf: </span>
          <span className="book-shelf-value">
            {shelf === 'currentlyReading' && 'Currently Reading'}
            {shelf === 'wantToRead' && 'Want to Read'}
            {shelf === 'read' && 'Read'}
          </span>
        </div>
      )}
    </div>
  );
};

export default Book;
