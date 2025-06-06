import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import SearchPage from './SearchPage';
import Header from './components/Header';
import ShelfList from './components/ShelfList';
import FloatingActionButton from './components/FloatingActionButton';

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const books = await BooksAPI.getAll();
        setBooks(books);
      } catch (error) {
        console.error('Error fetching books:', error);
      } finally {
        setLoading(false);
      }
    };

    getBooks();
  }, []);

  const updateBookShelf = async (book, newShelf) => {
    try {
      await BooksAPI.update(book, newShelf);
      
      setBooks(prevBooks => {
        //
        // Remove the book from its current shelf
        //
        const updatedBooks = prevBooks.filter(b => b.id !== book.id);
        
        //
        // Add the book back with the new shelf if it's not 'none'
        //
        if (newShelf !== 'none') {
          book.shelf = newShelf;
          updatedBooks.push(book);
        }
        
        return updatedBooks;
      });
    } catch (error) {
      console.error('Error updating book shelf:', error);
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <div className="list-books">
              <Header />
              <ShelfList books={books} onShelfChange={updateBookShelf} />
              <FloatingActionButton />
            </div>
          </Route>
          <Route path="/search">
            <SearchPage
              books={books}
              onShelfChange={updateBookShelf}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
