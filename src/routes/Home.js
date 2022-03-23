import React, { useState } from "react";
import Clock from "react-live-clock";
import styled from "styled-components";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import ToDo from "../components/ToDo";
import Date from "../components/Date";

const Container = styled.div`
  position: absolute;
  background-color: #c7efdf;
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 500px;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  margin-top: 80px;
  font-family: 'Rampart One', cursive;
  font-size: 30px;
`;

const Time = styled.div`
  width: 200px;
  margin-top: 10px;
  font-family: 'Gaegu', cursive;
  font-size: 60px;
  color: white;
`;

const Form = styled.form`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const List = styled.div`
  margin-top: 30px;
  padding: 10px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.3);
`;

function Home({ toDos, addToDo }) {
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
      <Title>時間は夢を裏切らない</Title>
      <Date />
      <Time>
        <Clock format={"HH:mm:ss"} ticking={true} />
      </Time>
      <Form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} /> <button>+</button>
      </Form>
      <List>
        <ul>
          {toDos.map((toDo) => (
            <ToDo {...toDo} key={toDo.id} />
          ))}
        </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);