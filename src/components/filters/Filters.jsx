import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import Button from '../button/Button';
import { clearDoneTodo, toggleFilter } from '../../store/actions/actions';
import './filters.css';

const Filters = ({ dispatch }) => {
  const filters = useSelector(state => state.filtersReducer);
  const handlerClearDoneTodo = () => {
    dispatch(clearDoneTodo());
  };

  const setFilter = id => {
    dispatch(toggleFilter(id));
  };

  return (
    <div className="filters">
      <ul>
        {filters.map(filter => (
          <li
            key={filter.id}
            onClick={() => setFilter(filter.id)}
            className={filter.isActiveClass ? 'active' : ''}
          >
            {filter.text}
          </li>
        ))}
      </ul>
      <Button text={'Clear Done'} onClick={() => handlerClearDoneTodo()} />
    </div>
  );
};

export default connect()(Filters);
