import { ADD, DELETE, BOOL, EDIT } from "./actionTypes";

const addToDo = (text) => {
  return {
    type: ADD,
    text,
    bool: false,
  };
};

const deleteToDo = (id) => {
  return {
    type: DELETE,
    id,
  };
};

const editToDo = (id, text) => {
  return {
    type: EDIT,
    id,
    text,
  };
};

const doneToDo = (id, bool) => {
  return {
    type: BOOL,
    id,
    bool,
  };
};

export const actionCreators = {
  addToDo,
  deleteToDo,
  doneToDo,
  editToDo,
};