import React from "react";
import "./App.css";
import DogList from "./components/dogList";
import { connect } from "react-redux";
import * as actionCreators from "./state/actionCreators";

function App() {
  //console.log(props)
  return (
    <div className="App">
      <nav className="navbar">
        <h1>Fetch your Dogs List</h1>
      </nav>
      <DogList />
    </div>
  );
}

export default connect(
  state => state,
  actionCreators
)(App);
