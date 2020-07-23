import * as _ from "lodash";

// Todos Reducer

const initialState = {
  active: [],
  completed: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      let active = _.cloneDeep(state.active);
      active.push(action.todo);
      return { ...state, active };
    }
    case "DELETE_TODO": {
      let updatedState = _.cloneDeep(state);
      updatedState[action.key] = updatedState[action.key].filter(
        (todo) => todo.id !== action.id
      );
      return { ...updatedState };
    }
    case "EDIT_TODO": {
      return state.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            ...action.updates,
          };
        } else {
          return todo;
        }
      });
    }
    case "MOVE_TODO": {
      let updatedState = _.cloneDeep(state);
      let todo = _.cloneDeep(updatedState[action.key][action.index]);
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
