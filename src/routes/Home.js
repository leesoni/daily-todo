import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import ToDo from "../components/ToDo";
import bgImage from "../bg.jpg";

const Img = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${bgImage});
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  margin-top: 100px;
  font-family: "Lobster", cursive;
  font-size: 70px;
  color: white;
`;

const Form = styled.form`
  margin-top: 30px;
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
    <Img>
      <Title>ToDo</Title>
      <Form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} /> <button>+</button>
      </Form>
      <List>
        <ul>
          {toDos.map(toDo => (
            <ToDo {...toDo} key={toDo.id} />
          ))}
        </ul>
      </List>
    </Img>
  );
}

function mapStateToProps(state) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    addToDo: text => dispatch(actionCreators.addToDo(text))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);