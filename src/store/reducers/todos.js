import {
  ADD_TODO,
  DELETE_TODO,
  MARK_TODO,
  CLEAR_DONE_TODO,
} from '../../constants/actions';

const initialState = [];

export const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          isDone: false,
        },
      ];
    case DELETE_TODO:
      return state.filter(item => item.id !== action.id);

    case MARK_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo
      );

    case CLEAR_DONE_TODO:
      return state.filter(item => !item.isDone);
    default:
      return state;
  }
};
