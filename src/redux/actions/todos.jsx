import { v4 as uuid } from "uuid";
import { TODO } from "./actionTypes";

// ADD TODO
export const addTodo = ({ title = "", content = "", isCompleted = false }) => ({
  type: TODO.ADD,
  todo: {
    id: uuid(),
    title,
    content,
    isCompleted,
  },
});

// DELETE_TODO
export const deleteTodo = (id, key) => ({
  type: TODO.DELETE,
  id,
  key,
});

// EDIT_TODO
export const editTodo = (updatedTodo, key, index) => ({
  type: TODO.EDIT,
  updatedTodo,
  key,
  index,
});

// MOVE_TODO
export const moveTodo = (id, key, index) => ({
  type: TODO.MOVE,
  id,
  key,
  index,
});
