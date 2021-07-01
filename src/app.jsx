// Parent Component
import React, { useState } from 'react';
import BooksForm from './components/booksForm';
import BooksList from './components/booksList';
import './App.css';

// The state for each of the child components is handled here in app.jsx

function App() {

  // Hooks
  const [book, setBook] = useState('');
  const [books, setBooks] = useState(['']);

  const handleChange = e => {   
    setBook([e.target.value]);
    // The Child, BooksForm, has access to handleChange because its passed through as an action
  }

  const handleSubmit = e => {
    e.preventDefault();
    const booksUpdate = books.concat([book])
    setBooks(booksUpdate);
    setBook('')
  }

  return (
    <div className="App">
     <BooksForm 
      book={book} 
      handleChange={handleChange}
      handleSubmit={handleSubmit}
     />

     <BooksList
      books={books}  
    />
    </div>
  );
}

export default App;
