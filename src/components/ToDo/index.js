import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { actionCreators } from "../../store/actions";

import './style.scss'

function ToDo({ text, bool, onBtnClick, toggleDone, editToDo }) {
  const [isEdit, setIsEdit] = useState(false);
  const [editText, setEditText] = useState("");

  function onChangeEdit(e) {
    setEditText(e.target.value);
  }
  function onSubmitEdit(e) {
    e.preventDefault();
    editToDo(editText);
    setIsEdit(false);
  }
  function clickEye() {
    toggleDone(!bool);
  }
  function clickToDo(text) {
    setIsEdit(true);
    setEditText(text);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        height: "30px",
      }}
    >
      <Eye onClick={clickEye}>{bool ? "✅" : "📌"}</Eye>
      {isEdit ? (
        <form onSubmit={onSubmitEdit}>
          <input
            className="inputEdit"
            value={editText}
            onChange={onChangeEdit}
          />
        </form>
      ) : (
        <Txt onClick={() => clickToDo(text)} deco={bool && "line-through"}>
          {text}
        </Txt>
      )}
      <Btn onClick={onBtnClick}>X</Btn>
    </div>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
    editToDo: (text) => dispatch(actionCreators.editToDo(ownProps.id, text)),
    toggleDone: () =>
      dispatch(actionCreators.doneToDo(ownProps.id, ownProps.bool)),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);

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
  cursor: pointer;
`;