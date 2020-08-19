import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayList from './DisplayList';

class App extends Component {

  constructor() {
    super();
    this.state = {text: '', items: []}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

// This method prevents form from automatically submitting. It saves the text (the current value of the input)
// We create a newItems variable which is a concatination of the old srtate.items array and our new next(user input)
// and then resets state to be blank and add our newItem to our items array
  handleSubmit(e){
    e.preventDefault();
    var text = this.state.text;
    var newItems = this.state.items.concat(text)
    this.setState({text: '', items: newItems});
  }

// this method resets state to equal the value of the input
  handleChange(e){
    var text = e.target.value;
    this.setState({text: text})
  }
//we need to pass handleDelete to the DisplayList so it can be used
//we need to find the item in state.items that needs to be deleted
//we are dropping the itemToBeDeleted from the array and resetting state to be the new array w/out the item.
  handleDelete(itemToBeDeleted) {
    var newItems = this.state.items.filter((_item) => {
      return _item != itemToBeDeleted
    });
    this.setState({items : newItems});
  }


  render() {
    return (
      <div>
        <p>TODO</p>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.text}/>
          <button>
          Submit
          </button>
        </form>
        <DisplayList
          items={this.state.items}
          handleDelete = {this.handleDelete}/>

      </div>
    );
  }
}

export default App;
