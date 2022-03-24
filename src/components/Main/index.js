import React, { useState } from "react";
import Clock from "react-live-clock";
import styled from "styled-components";
import { connect } from "react-redux";
import { actionCreators } from "../../store/actions";
import ToDo from "../ToDo";
import Date from "../Date";
import "./style.scss";

const Emoji = (props) => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>
);

function App({ toDos, addToDo }) {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    addToDo(text);
    setText("");
  }

  return (
    <Container>
      <Title>
        <Emoji />時間は夢を裏切らない
        {/* <Emoji symbol="" /> */}
      </Title>
      <Date />
      <Time>
        <Clock format={"HH:mm:ss"} ticking={true} />
      </Time>
      <Form onSubmit={onSubmit}>
         <input
          className="inputAdd"
          type="text"
          value={text}
          onChange={onChange}
        />
      </Form>
      <List>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </List>
    </Container>
  );
}

function mapStateToProps(state) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

const Container = styled.div`
  position: absolute;
  background-color: #c7efdf;
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  flex-direction: column;
  margin: 0;
`;

const Title = styled.div`
  margin-top: 80px;
  font-family: "Rampart One", cursive;
  font-size: 30px;
`;

const Time = styled.div`
  width: 300px;
  margin-top: 10px;
  font-family: "Gaegu", cursive;
  font-size: 60px;
  color: white;
  text-align: center;
`;

const Form = styled.form`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const List = styled.ul`
  margin-top: 30px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.3);
  opacity: 0.8;
  font-family: 'Noto Sans JP', 'Gothic A1', sans-serif;
  font-size: 20px;
  padding: 10px 20px;
  max-height: 300px;
  overflow-y: auto;
`;