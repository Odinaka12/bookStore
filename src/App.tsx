import './App.css'
import Card from "../src/card"
import axios from "axios"
import SearchImg from "./assets/Search-img.png"
import { useState } from 'react'

function App() {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([])
  const searchBook = (evt: { key: string }) => {
    if(evt.key==="Enter" || evt){
      axios.get("https://www.googleapis.com/books/v1/volumes?q="+search+"&key=AIzaSyDNJdzL8-E-PMy8fSGWHL7YxCuCRyT1tvM"+"&maxResults=40")
      .then(res => setData(res.data.items))
      .catch(err => console.log(err))
      
    }
  } 

  return (
   
     <div>
      <header>
        <div className='bgHolder'>
          <div className='bgg'>
            <p>A room without books is like a body without a soul.</p>
          </div>
          <div className='findBook'>
            <h1>Find Your Book</h1>
            <a> <input type="text" placeholder='Enter Your Book Name' value={search} onChange={e => setSearch(e.target.value)} onKeyDown={searchBook} /> <img src={SearchImg} /> </a>
          </div>
        </div>
      </header>

      <section>
       <div className='container'>
        {
          <Card book={bookData} />
        }
       </div>
      </section>

     </div>

  )
}

export default App
