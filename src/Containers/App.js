import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      userInput: '', 
      toDoArray: [], 
    }; 
    this.inputChangeHandler = this.inputChangeHandler.bind(this); 
    this.pressEnterHandler = this.pressEnterHandler.bind(this); 
    this.deleteItemHandler = this.deleteItemHandler.bind(this); 
  }

  inputChangeHandler(event) {
    this.setState({
      userInput: event.target.value, 
    })
  }; 

  pressEnterHandler(event) {
    if(event.key !== 'Enter') {
      return 
    } 
    if(this.state.userInput === '') {
      return 
    }
    this.setState({
      userInput: '', 
      toDoArray: this.state.toDoArray.concat(this.state.userInput), 
    })
  }; 

  deleteItemHandler(deleteItem) {
    const itemIndex = this.state.toDoArray.findIndex(item => {
      return item === deleteItem
    }); 
    this.state.toDoArray.splice(itemIndex, 1); 
    this.setState({
      toDoArray: this.state.toDoArray, 
    })
  }; 


  renderItems() {
    return this.state.toDoArray.map(item => {
      return (
      <li>
        <button onClick={this.checkCompleteHandler}></button>
        <span>{item}</span>
        <i onClick={() => this.deleteItemHandler(item)} className="fas fa-times"></i>
      </li>
      )
    })
  }; 

  getExtendedState(state) {
    return {
    }
  }; 

  render () {
    const extendedState = this.getExtendedState(this.state); 
    return (
      <div className="App">
        <h1> My To-Do List </h1>
        <input 
          type = 'text'
          placeholder = 'What needs to be done?'
          value = {this.state.userInput}
          onChange = {this.inputChangeHandler} 
          onKeyPress = {this.pressEnterHandler} /> 
        <ul> 
        {this.renderItems()} 
        </ul>
      </div>
    );
  }; 
}; 

export default App;
