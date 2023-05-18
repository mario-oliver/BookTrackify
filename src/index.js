import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const books = [
  {
    author: 'Jordan Moore',
    title: 'Interesting Facts For Curious Minds',
    img: 'https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg',
    id: 1,
  },
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
    id: 2,
  },
]

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id)
    console.log(book.author)
  }

  return (
    <section className="booklist">
      {books.map((book) => (
        <Book {...book} key={book.id} logValue={getBook} />
      ))}
    </section>
  )
}

const Book = (props) => {
  console.log(props)
  const { img, title, author, logValue, id } = props
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button onClick={() => logValue(id)}>Find Id</button>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
