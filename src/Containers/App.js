import React, { Component } from 'react';
import './App.css';
import Quote from '../Components/Quote/Quote'; 
import Buttons from '../Components/Buttons/Buttons'; 

const quoteLibrary = [
  {text: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.", author: 'Dr. Suess', color: '#16a085'}, 
  {text: 'Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.', author: 'Mark Twain', color: '#27ae60'}, 
  {text: 'The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.', author: 'Mark Caine', color: '#2c3e50'}, 
  {text: 'Love yourself first and everything else falls into line. You really have to love yourself to get anything done in this world.', author: 'Lucille Ball', color: '#f39c12'}, 
  {text: 'Challenges are what make life interesting and overcoming them is what makes life meaningful.', author: 'Joshua J. Marine', color: '#e74c3c'},  
  {text: 'Remember that the happiest people are not those getting more, but those giving more.', author: 'H. Jackson Brown, Jr.', color: '#9b59b6'}, 
  {text: 'Live in the sunshine, swim the sea, drink the wild air.', author: 'Ralph Waldo Emerson', color: '#fb6964'},  
  {text: 'We are what we repeatedly do; excellence, then, is not an act but a habit.', author: 'Aristotle', color: '#388894'}, 
  {text: 'A man is a success if he gets up in the morning and gets to bed at night, and in between he does what he wants to do.', author: 'Bob Dylan', color: '#472e32'}, 
  {text: 'The big lesson in life, baby, is never be scared of anyone or anything.', author: 'Frank Sinatra', color: '#94386C'}, 
]; 

const nextIndex = () => {
  return Math.floor(Math.random() * quoteLibrary.length);
};

const constructTwitterUrl = {
  preface: 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="', 
  connection: '"', 
  ending: '' }; 

const constructTumblrUrl = {
  preface: 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=', 
  connection: '&content=', 
  ending: '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'
};

class App extends Component {
  state = {
    randomIndex: nextIndex(),
  }; 

  clickHandler = ( ) => {
    this.setState ({
      randomIndex: nextIndex(), 
    }); 
  };

  render () {
    const quoteDisplay = quoteLibrary[this.state.randomIndex]; 

    const fontColorStyle = {
      color: quoteDisplay.color
    }; 

    const backgroundStyle = {
      backgroundColor: quoteDisplay.color
    }; 

    const twitterFullUrl = () => {
      return constructTwitterUrl.preface + quoteDisplay.text + constructTwitterUrl.connection + quoteDisplay.author
    }; 

    const tublrFullUrl = () => {
      return constructTumblrUrl.preface + quoteDisplay.author + constructTumblrUrl.connection + quoteDisplay.text + constructTumblrUrl.ending
    }; 

    return (
      <div className="App" style = {backgroundStyle}>
        <div style = {fontColorStyle}> 
          <Quote 
            text = {quoteDisplay.text}
            author = {quoteDisplay.author}/>
          <Buttons
            twitterFullUrl = {twitterFullUrl()}
            tublrFullUrl = {tublrFullUrl()}
            clicked = {this.clickHandler}
            buttonStyle = {backgroundStyle} />
        </div>
      </div>
    );
  }; 
}; 

export default App;
