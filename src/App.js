import { useState } from "react";
import "./App.css";

function App() {
  const [bookList, setBookList] = useState([])

  const books = [
    {
      id: 1,
      title: 'Eloquent JavaScript',
      rating: 4 / 5,
      category: "javascript" 
    },

    {
      id: 2,
      title: "You Don't Know JS",
      rating: 3.5 / 5,
      category: "javascript" 
    },

    {
      id: 3,
      title: 'Shiva Trilogy',
      rating: 5/5,
      category: "fiction" 
    },

    {
      id: 4,
      title: "Harry Potter and the Sorcerer's Stone",
      rating: 4.5/5,
      category: "fiction" 
    },

    {
      id: 5,
      title: 'Never Split the Difference',
      rating: 3.5/5,
      category: "business" 
    },

    {
      id: 6,
      title: 'Loonshots',
      rating: 5/5,
      category: "business" 
    },
  ]

  // to pull out unique categories and avoid repetation
  const categories = [ ...new Set(books.map((book)=>{return book.category})) ] // to convert to an array

  const handleClick = (category) => {
    const result = books.filter((book)=>{return book.category === category})
    console.log(result)
    setBookList(result)
  }

  return (
    <div className="App">
      <h1>
        <span>📚</span> goodBooks
      </h1>
      <p>Checkout my favorite books. Select a genre to get started</p>

      {categories.map((category)=>{
        return <button key ={category} className="btn" onClick={()=>{handleClick(category)}}>{category}</button>
      })}
      <hr />



      {bookList.map((book, index)=>{
        return <div className="container" key={index}>
        <p>{book.title}</p>
        <small>{book.rating}</small>
        </div>
      })}

    </div>
  );
}

export default App;
