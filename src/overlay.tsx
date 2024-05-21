import React from "react";
import cancleImg from "./assets/Vector.png";

const Modal = ({show, item, onClose}) =>{
    if(!show){
        return null;
    }

    const thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;

    return(
    <>
    <div className="overlay">
        <div className="overlay-inner">
            <div className="inner-box">
            <img src={thumbnail} />
                <div className="info">
                    <h1>{item.volumeInfo.title}</h1>
                    <h4>{item.volumeInfo.authors}</h4>
                    <h5>{item.volumeInfo.publisher} <span>{item.volumeInfo.publishedDate}</span></h5>
                    <a href={item.volumeInfo.previewLink}>More</a>
                    <img className="cancle" src={cancleImg} onClick={onClose} />

                </div>
            </div>
            <div className="description">
                <p> {item.volumeInfo.description} </p>
            </div>
        </div>
    </div>
    </>
    )
}
export default Modal