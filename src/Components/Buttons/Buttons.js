import React from 'react';  
import './Buttons.css'

const buttons = (props) => {

  return (
    <div className = 'btn'>
      <button 
        style = {props.buttonStyle} 
        className='fabButton'>
        <a href = {props.twitterFullUrl} target='_blank'><i className="fab fa-twitter"></i></a>
      </button>
      <button 
        style = {props.buttonStyle} 
        className='fabButton'>
        <a href = {props.tublrFullUrl} target='_blank'><i className="fab fa-tumblr"></i></a>  
      </button>
      <button 
        className = 'newQuote'
        onClick = {props.clicked}
        style = {props.buttonStyle}> 
        New quote
      </button>
      <p className = 'endnote'> by Hanna Yang </p>
    </div>
  )
}; 

export default buttons; 