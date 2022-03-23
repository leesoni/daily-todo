import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { actionCreators } from "../store";

const Btn = styled.button`
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 10px;
`;

const List = styled.div`
  margin: 10px;
  text-align: center;
  font-family: 'Song Myung', serif;
  font-size: 20px;
  display: flex;
  justify-content: center;
  opacity: 0.8;
`;

function ToDo({ text, onBtnClick }) {
  return (
    <List>
      {text}
      <Btn onClick={onBtnClick}>X</Btn>
    </List>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id))
  };
}

export default connect(null, mapDispatchToProps)(ToDo);