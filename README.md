# MyReads - A Book Tracking App

MyReads is a React-based web application that allows you to select and categorize books you have read, are currently reading, or want to read. This project is part of the Udacity React Nanodegree program.

## Features

- View books on three different shelves: "Currently Reading," "Want to Read," and "Read"
- Search for books and add them to your shelves
- Move books between shelves or remove them
- Responsive design that works on mobile and desktop

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:cosource-richard/udacity-react-myreads.git
   cd udacity-react-myreads/starter
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Book.js          # Individual book component
│   ├── BookGrid.js      # Grid layout for displaying books
│   ├── Header.js        # Application header
│   ├── SearchBar.js     # Search input component
│   ├── Shelf.js         # Shelf component for each category
│   └── ShelfList.js     # List of all shelves
├── App.js               # Main application component
├── App.css              # Application styles
├── App.test.js          # Test files
├── BooksAPI.js          # API interface for book operations
├── index.js             # Application entry point
└── index.css            # Global styles
```


## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebook/create-react-app/blob/main/packages/cra-template/template/README.md).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
