import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { books } from './books'
import Book from './Book'

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id)
    console.log(book.author)
  }

  return (
    <>
      <h1>Mario's Best Books</h1>
      <section className="booklist">
        {books.map((book, index) => (
          <Book {...book} key={book.id} logValue={getBook} order={index} />
        ))}
      </section>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
