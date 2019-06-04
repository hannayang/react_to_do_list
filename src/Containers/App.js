import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      userInput: '', 
      toDoArray: [], 
      displayArray: [], 
    }; 
    this.inputChangeHandler = this.inputChangeHandler.bind(this); 
    this.pressEnterHandler = this.pressEnterHandler.bind(this); 
    this.deleteItemHandler = this.deleteItemHandler.bind(this); 
    this.clickAllHanderler = this.clickAllHanderler.bind(this); 
    this.clickActiveHandler = this.clickActiveHandler.bind(this); 
    this.clickCompletedHandler = this.clickCompletedHandler.bind(this); 
    this.clearCompletedHandler = this.clearCompletedHandler.bind(this); 
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
    if(this.state.userInput === ' ') {
      return
    }
    // it doesn't allow user input with only multiple spaces, e.g. '    '. 
    const spaceRegex = /^\s\s*\s$/;
    if(spaceRegex.test(this.state.userInput) === true) {
      return 
    } 
    this.setState({
      userInput: '', 
      toDoArray: this.state.toDoArray.concat({
        input: this.state.userInput, 
        isCompleted: false, 
      }), 
      displayArray: this.state.toDoArray.concat({
        input: this.state.userInput, 
        isCompleted: false, 
      }), 
    })
  }; 

  deleteItemHandler(deleteItem) {
    const itemIndex = this.state.toDoArray.findIndex(item => {
      return item === deleteItem
    }); 
    this.state.toDoArray.splice(itemIndex, 1); 
    this.setState({
      toDoArray: this.state.toDoArray, 
      displayArray: this.state.toDoArray, 
    })
  }; 

  checkboxClickHandler(item) {
    item.isCompleted = !item.isCompleted; 
    this.setState({
      toDoArray: this.state.toDoArray, 
      displayArray: this.state.toDoArray, 
    })
  }; 

  clickAllHanderler() {
    this.setState({
      displayArray: this.state.toDoArray, 
    })
  }; 

  clickActiveHandler() {
    const filteredActiveArray = [...this.state.toDoArray].filter(item => {
      return item.isCompleted === false
    })
    this.setState({
      displayArray: filteredActiveArray, 
    })
  }; 

  clickCompletedHandler() {
    const filteredCompletedArray = [...this.state.toDoArray].filter(item => {
      return item.isCompleted === true
    })
    this.setState({
      displayArray: filteredCompletedArray, 
    })
  }; 

  clearCompletedHandler() {
    const filteredActiveArray = [...this.state.toDoArray].filter(item => {
      return item.isCompleted === false
    })
    this.setState({
      toDoArray: filteredActiveArray, 
      displayArray: filteredActiveArray, 
    })
  }; 

  renderItems() {
    return this.state.displayArray.map(item => {
      const completedClass = item.isCompleted ? 'line-through gray' : ''; 
      return (
      <li>
        <input 
          type='checkbox' 
          checked={item.isCompleted} 
          onClick={() => this.checkboxClickHandler(item)} />
        <span className={completedClass}>{item.input}</span>
        <i onClick={() => this.deleteItemHandler(item)} className="fas fa-times"></i>
      </li>
      )
    })
  }; 

  render () {
    const itemsLeft = this.state.toDoArray.filter(item => {
      return item.isCompleted === false 
      }); 
    const numOfItemsLeft = itemsLeft.length;  
    return (
      <div className='App-wrap'>
        <div className='App'>
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
          <div className='summary'> 
            {numOfItemsLeft} item(s) left 
            <div className='status-buttons'>
              <button onClick={this.clickAllHanderler}> All</button> 
              <button onClick={this.clickActiveHandler}> Active </button> 
              <button onClick={this.clickCompletedHandler}> Completed </button>
            </div>
            <div className='clear-button'>
              <button onClick={this.clearCompletedHandler}> Clear Completed </button> 
            </div>
          </div>
        </div>
        <footer>
          <p> Designed and coded by </p> 
          <p> Hanna Yang </p>
        </footer>
      </div>
    );
  }; 
}; 

export default App;
