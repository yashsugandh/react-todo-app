import * as _ from "lodash";
import { TODO } from "../actions/actionTypes";
// Todos Reducer

const initialState = {
  active: [
    {
      id: 1,
      title: "Work",
      content: "Bug Fix",
      isCompleted: false,
    },
  ],
  completed: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TODO.ADD: {
      let active = _.cloneDeep(state.active);
      active.push(action.todo);
      return { ...state, active };
    }
    case TODO.DELETE: {
      let updatedState = _.cloneDeep(state);
      updatedState[action.key] = updatedState[action.key].filter(
        (todo) => todo.id !== action.id
      );
      return { ...updatedState };
    }
    case TODO.EDIT: {
      let updatedState = _.cloneDeep(state);
      updatedState[action.key][action.index] = action.updatedTodo;
      return {
        ...updatedState,
      };
    }
    case TODO.MOVE: {
      let updatedState = _.cloneDeep(state);
      let todo = _.cloneDeep(updatedState[action.key][action.index]);
      todo.isCompleted = !todo.isCompleted;
      updatedState[action.key].splice(action.index, 1);
      action.key === "active"
        ? updatedState.completed.push(todo)
        : updatedState.active.push(todo);
      return {
        ...updatedState,
      };
    }
    default:
      return state;
  }
};
