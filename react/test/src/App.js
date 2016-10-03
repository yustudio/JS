import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from "./components/Footer";

class App extends Component {

  constructor() {
    super();
    this.state = {title: "Will"};
  }

  changeTitle(title){
    this.setState({title});   // same as title: title
  }

  render() {
    const title = "Welcome";

    setTimeout(() => {
      this.setState({title: "Bob"});
    }, 2000)

    return (
      <div>
        <h1>{title}</h1>
        <Footer changeTitle={this.changeTitle.bind(this)} title={this.state.title} />      
      </div>

      // <div className="App">
      //   <div className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h2>Welcome to React</h2>
      //   </div>
      //   <p className="App-intro">
      //     To get started, just edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default App;
