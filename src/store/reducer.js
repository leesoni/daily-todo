import { ADD, DELETE, BOOL, EDIT } from "./actionTypes";

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

export default (state = [], action) => {
  loadToDos();
  state = toDos;

  switch (action.type) {
    case ADD:
      toDos = [
        { text: action.text, id: Date.now(), bool: action.bool },
        ...state
      ];
      saveToDos();
      return toDos;
    case DELETE:
      toDos = state.filter((toDo) => toDo.id !== action.id);
      saveToDos();
      return toDos;
    case BOOL:
      for (let i = 0; i < toDos.length; i += 1) {
        if (toDos[i].id === action.id) {
          toDos[i].bool = !action.bool;
        }
      }
      saveToDos();
      return toDos;
    case EDIT:
      for (let i = 0; i < toDos.length; i += 1) {
        if (toDos[i].id === action.id) {
          toDos[i].text = action.text;
        }
      }
      saveToDos();
      return toDos;
    default:
      return state;
  }
};