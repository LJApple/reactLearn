import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
  super(props);
   this.state = { liked: false };
  }
  handerClick(e) {
    this.setState({ liked: !this.state.liked });
  }
  render() {
    const test = this.state.liked ? 'like' : 'have\'t liked ';
    return (
      <p onClick={this.handerClick.bind(this)}>
        you {test} this. click to toggle
      </p>
    );
  }
}

export default App;
