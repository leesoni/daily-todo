import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = text => {
  return {
    type: ADD,
    text
  };
};

const deleteToDo = id => {
  return {
    type: DELETE,
    id
  };
};

let toDos = [];
const saveToDos = () => {
  localStorage.setItem("ToDo", JSON.stringify(toDos));
};
const loadToDos = () => {
  const loadedToDos = localStorage.getItem("ToDo");
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    toDos = parsedToDos;
  }
};

const reducer = (state = [], action) => {
  loadToDos();
  state = toDos;

  switch (action.type) {
    case ADD:
      toDos = [{ text: action.text, id: Date.now() }, ...state];
      saveToDos();
      return toDos;
    case DELETE:
      toDos = state.filter(toDo => toDo.id !== action.id);
      saveToDos();
      return toDos;
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo
};

export default store;