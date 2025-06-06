import React, { useState, useEffect } from 'react';
import BookGrid from './components/BookGrid';
import SearchBar from './components/SearchBar';
import * as BooksAPI from './BooksAPI';

const SearchPage = ({ books, onShelfChange }) => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const searchBooks = async () => {
      const searchTerm = query.trim().toLowerCase();
      //
      // Don't search if the query is too short
      //
      if (searchTerm.length < 1) {
        setSearchResults([]);
        return;
      }

      try {
        //
        // Search in the existing books
        //
        const localResults = books.filter(book => {
          const title = book.title?.toLowerCase() || '';
          const authors = book.authors?.join(' ').toLowerCase() || '';
          return title.includes(searchTerm) || authors.includes(searchTerm);
        });

        //
        // Search in the API for more results
        //
        let apiResults = [];
        try {
          const response = await BooksAPI.search(searchTerm, 20);
          if (response && !response.error) {
            apiResults = response;
          }
        } catch (error) {
          console.error('API search error:', error);
        }
        //
        // Combine and deduplicate results
        //
        const combinedResults = [...localResults];
        const existingIds = new Set(localResults.map(book => book.id));
        
        apiResults.forEach(book => {
          if (!existingIds.has(book.id)) {
            combinedResults.push(book);
            existingIds.add(book.id);
          }
        });

        //
        // Update search results with current shelf status
        //
        const updatedResults = combinedResults.map(book => {
          const existingBook = books.find(b => b.id === book.id);
          return existingBook || book;
        });

        setSearchResults(updatedResults);
        
      } catch (error) {
        console.error('Search error:', error);
        setSearchResults([]);
      }
    };
    
    //
    // Debounce search to avoid too many API calls
    //
    const timer = setTimeout(searchBooks, 300);
    return () => clearTimeout(timer);
  }, [query, books]);

  return (
    <div className="search-books">
      <SearchBar 
        query={query}
        onSearchChange={(e) => setQuery(e.target.value)}
      />
      <div className="search-books-results">
        <BookGrid 
          books={searchResults} 
          onShelfChange={onShelfChange} 
          showShelfStatus={true}
        />
      </div>
    </div>
  );
};

export default SearchPage;
