import logo from "./logo.svg";
import "./App.css";

import { Component } from "react";
class Test extends Component {
  temp = () => {
    console.log("하이");
  };
  render() {
    return (
      <div id="test" onClick={this.temp} style={{ userSelect: "none" }}>
        테스트중이야
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <h1>하이? 내 이름은 리액트야</h1>
      <Test></Test>
    </div>
  );
}

export default App;
