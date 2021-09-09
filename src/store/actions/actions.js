import {
  ADD_TODO,
  DELETE_TODO,
  MARK_TODO,
  CLEAR_DONE_TODO,
  SHOW_DONE,
  SHOW_IN_PROGRESS,
} from '../../constants/actions';
import { TOGGLE_FILTER } from '../../constants/filters';

let nextId = 0;

// Action creator
export const addTodo = text => ({
  type: ADD_TODO,
  payload: {
    id: ++nextId,
    title: text,
  },
});
export const deleteTodo = id => ({
  type: DELETE_TODO,
  id,
});
export const markTodo = id => ({
  type: MARK_TODO,
  id,
});
export const clearDoneTodo = id => ({
  type: CLEAR_DONE_TODO,
  id,
});

export const toggleFilter = id => ({
  type: TOGGLE_FILTER,
  id,
});
export const showDone = () => ({
  type: SHOW_DONE,
});
export const showInProgress = () => ({
  type: SHOW_IN_PROGRESS,
});
