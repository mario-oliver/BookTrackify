import React from 'react'

const Book = (props) => {
  // console.log(props)
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

export default Book
