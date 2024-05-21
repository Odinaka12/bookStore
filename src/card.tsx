import React, { useState } from "react";
import Modal from "./overlay";

const Card = ({book}) =>{
  console.log(book);
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState(false);
  
    return(
    <>
    {
       book.map((item) =>{
        const thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail && item.volumeInfo.imageLinks.
        smallThumbnail;
        const amount = item.saleInfo && item.saleInfo.
        saleability;
        const title = item.volumeInfo.title
        const textsnipet = item.searchInfo && item.searchInfo.textSnippet
        
        
        if(textsnipet === null){
          return(
            <>
            <div className="card"  onClick={() => {setShow(true); setItem(item)}}>
            <div className="imgContainer">
              <img src={thumbnail} />
            </div>
            <div className="textArea">
              <h1 className="title">{title}</h1>
              <p className="shortDis">Click to view more about this book</p>
              <button className="price" onClick={() => {setShow(true); setItem(item)}}>FREE</button>
            </div>
          </div>
          <Modal show = {show} item = {bookItem} onClose={() => setShow(false)} />
          </>
          )
        } 

        if(amount === "NOT_FOR_SALE"){
          return(
            <>
            <div className="card" onClick={() => {setShow(true); setItem(item)}}>
            <div className="imgContainer">
              <img src={thumbnail} />
            </div>
            <div className="textArea">
              <h1 className="title">{title}</h1>
              <p className="shortDis">{textsnipet}</p>
              <button className="price" onClick={() => {setShow(true); setItem(item)}}>FREE</button>
            </div>
          </div>
          <Modal show = {show} item = {bookItem} onClose={() => setShow(false)} />
          </>
          )
        } 
               
        if(thumbnail!= undefined){

          return(
            <>
            <div className="card" onClick={() => {setShow(true); setItem(item)}}>
            <div className="imgContainer">
              <img src={thumbnail} />
            </div>
            <div className="textArea">
              <h1 className="title">{title}</h1>
              <p className="shortDis">{textsnipet}</p>
              <button className="price" onClick={() => {setShow(true); setItem(item)}}>{amount}</button>
            </div>
          </div>
          <Modal show = {show} item = {bookItem} onClose={() => setShow(false)} />
          </>
          )

        }
       })
    }
    
    </>
    )
}
export default Card;