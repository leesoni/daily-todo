import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { actionCreators } from "../store";

const Btn = styled.button`
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 10px;
  margin-left: auto;
`;

const Eye = styled.span`
  width: 40px;
  cursor: pointer;
`;

const Txt = styled.div`
  margin-right: 10px;
  text-decoration: ${(props) => props.deco};
`;

const List = styled.div`
  margin: 10px;
  font-family: 'Song Myung', serif;
  font-size: 20px;
  display: flex;
  opacity: 0.8;
`;

function ToDo({ text, onBtnClick }) {
  const [isDone, setIsDone] = useState(false);
  const toggleDone = () => setIsDone(!isDone);
  return (
    <List>
      {/* <Txt> {text}</Txt> */}
      <Eye onClick={toggleDone}>{isDone ? "😻" : "😾"}</Eye>
      <Txt deco={isDone && "line-through"}>{text}</Txt>
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