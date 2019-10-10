import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import styled from "styled-components";

function DogList(props) {
  //console.log(props);
  return (
    <TestDiv>
      <div>
        <img src={props.dog.dog} alt="Dog Pictures" />
      </div>

      <button onClick={e => props.getDogs()}>Click Me</button>
    </TestDiv>
  );
}
export default connect(
  state => state,
  actionCreators
)(DogList);

const TestDiv = styled.div`
  width: 50%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 0 1px 6px -2px #000;
  background-color: whitesmoke;
  margin-top: 30px;
  align-items: center;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  button {
    background-color: white;
    color: black;
    border: 2px solid #4caf50;
    width: 10rem;
    height: 2rem;

    &:hover {
      background-color: #4caf50;
      color: white;
    }
  }

  img {
    width: 100%;
    height: 50vh;
  }
`;
