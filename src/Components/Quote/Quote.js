import React from 'react'; 
import './Quote.css'; 

const quote = (props) => {
  return (
    <div className = 'quote'>
      <p className = 'quote-text'> <i className="fas fa-quote-left"></i> {props.text} </p>
      <p className = 'quote-author'> - {props.author} </p> 
    </div>
  )
}

export default quote; 