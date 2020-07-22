import { v4 as uuid } from "uuid";

// ADD TODO
export const addTodo = ({ title = "", content = "", isCompleted = false }) => ({
  type: "ADD_TODO",
  todo: {
    id: uuid(),
    title,
    content,
    isCompleted,
  },
});

// DELETE_TODO
export const deleteTodo = ({ id } = {}) => ({
  type: "DELETE_TODO",
  id,
});

// EDIT_TODO
export const editTodo = (id, updates) => ({
  type: "EDIT_TODO",
  id,
  updates,
});
