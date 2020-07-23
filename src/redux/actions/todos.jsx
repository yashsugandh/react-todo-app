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
export const deleteTodo = (id, key) => ({
  type: "DELETE_TODO",
  id,
  key,
});

// EDIT_TODO
export const editTodo = (updatedTodo, key, index) => ({
  type: "EDIT_TODO",
  updatedTodo,
  key,
  index,
});

// MOVE_TODO
export const moveTodo = (id, key, index) => ({
  type: "MOVE_TODO",
  id,
  key,
  index,
});
