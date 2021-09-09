import { useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { deleteTodo, markTodo } from '../../store/actions/actions';
import IfNoTodos from '../IfNoTodos/IfNoTodos';
import TodoItem from '../todoItem/TodoItem';

import './todoItems.css';

const TodoItems = ({ dispatch }) => {
  const todos = useSelector(state => state.todoReducer);
  const filters = useSelector(state => state.filtersReducer);

  const handlerDeleteTodo = id => {
    dispatch(deleteTodo(id));
  };

  const handlerMarkTodo = id => {
    dispatch(markTodo(id));
  };


  const filterVisibleTodos = todos => {
    let currentFilter = filters.find(filter => filter.isActiveClass);

    if (currentFilter === undefined) {
      currentFilter = 'All';
    }

    if (currentFilter.text) {
      switch (currentFilter.text) {
        case 'All':
          return todos;

        case 'Completed':
          return todos.filter(filter => filter.isDone);

        case 'In Progress':
          return todos.filter(filter => !filter.isDone);

        default:
          return todos;
      }
    } else {
      return todos;
    }
  };
  const visibleTodos = filterVisibleTodos(todos);

  return (
    <div className="todo_items">
      {visibleTodos.length ? (
        visibleTodos.map(todo => (
          <TodoItem
            key={todo.title}
            todo={todo.title}
            onClick={() => handlerDeleteTodo(todo.id)}
            onClickMarkTodo={() => handlerMarkTodo(todo.id)}
            isDone={todo.isDone}
          />
        ))
      ) : (
        <IfNoTodos />
      )}
    </div>
  );
};

export default connect()(TodoItems);
