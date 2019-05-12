import React from 'react';  
import './Buttons.css'

const buttons = (props) => {

  return (
    <div className = 'btn'>
      <a className='fabBtn twitterBtn' style = {props.buttonStyle} href = {props.twitterFullUrl} target='_blank'><i className="fab fa-twitter"></i></a>
      <a className='fabBtn tumblrBtn' style = {props.buttonStyle} href = {props.tublrFullUrl} target='_blank'><i className="fab fa-tumblr"></i></a>  
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