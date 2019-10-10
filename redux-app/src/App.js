import React from "react";
import "./App.css";
import DogList from "./components/dogList";
import { connect } from "react-redux";
import * as actionCreators from "./state/actionCreators";

function App() {
  //console.log(props)
  return (
    <div className="App">
      <header className="App-header">Fetch your Dogs List</header>
      <DogList />
    </div>
  );
}

export default connect(
  state => state,
  actionCreators
)(App);
