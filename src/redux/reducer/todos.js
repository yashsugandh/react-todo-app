// Expenses Reducer

const todosReducerDefaultState = [];

export default (state = todosReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.todo];
    case "DELETE_TODO":
      return state.filter(({ id }) => id !== action.id);
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
