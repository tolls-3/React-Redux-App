import React from "react";
import { connect } from "react-redux";
import { getDogs } from "../state/actionCreators";

function DogList(props) {
    //debugger;

  const fetchDog = e => {
    e.preventDefault();
    props.getDogs();
  };

  return (
    <div>
      <h2>Dogs Life Matters!</h2>
      <div>
        <img src={props.dog.dog} alt="Dog Pictures" />
      </div>

      <button onClick={fetchDog}>Click Me</button>
    </div>
  );
}

export default connect(
  state => state,
  { getDogs }
)(DogList);
