import React from 'react';

export default function BooksForm({ book, handleChange, handleSubmit }) {     //Dont have to say props.action
    return (
        <>
            <h2>Add a book to your Library</h2>
            <form onSubmit={handleSubmit}>
                <label for="book"></label>
                <input id="book" onChange={handleChange} type="text" value={book} /> 
                <button type="submit">Add Book</button>
            </form>
        </>
    )
}