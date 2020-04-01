import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

export class App extends React.Component {
  state = {
    helloText: null
  };

  componentDidMount() {
    axios.get("/helloWorld").then(res => {
      this.setState({
        helloText: res.data
      });
    });
  }
  render() {
    let text = this.state.helloText;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{text}</p>
        </header>
      </div>
    );
  }
}

export default App;
