// Expenses Reducer

const initialState = {
  active: [],
  completed: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      let todos = state.active;
      todos.push(action.todo);
      return { ...state, todos };
    }
    case "DELETE_TODO": {
      let updatedState = state;
      updatedState[action.key] = updatedState[action.key].filter(
        (id) => id !== action.id
      );
      return { updatedState };
    }
    case "EDIT_TODO":
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
    default:
      return state;
  }
};
