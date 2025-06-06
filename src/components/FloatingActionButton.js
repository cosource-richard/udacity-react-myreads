import React from 'react';
import { Link } from 'react-router-dom';
import addIcon from '../icons/add.svg';

const FloatingActionButton = () => {
  return (
    <div className="open-search">
      <Link to="/search" className="open-search-button">
        <img src={addIcon} alt="Add book" />
      </Link>
    </div>
  );
};

export default FloatingActionButton;
