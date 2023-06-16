// import data from '../mock/data.json';
import { JobPosition } from './JobPosition';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllPositions } from '../store/positions/position-selectors';
import { addFilter } from 'store/filters/filter-actions';
import { filterSelector } from '../store/filters/filter-selectors';
import { selectVisiblePositions } from '../store/positions/position-selectors';
const JobList = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector(filterSelector);
  const positions = useSelector((state) =>
    selectVisiblePositions(state, currentFilters)
  );

  const handleFilter = (filter) => dispatch(addFilter(filter));

  return (
    <div className='job-list'>
      {positions.map((item) => (
        <JobPosition key={item.id} {...item} handleFilter={handleFilter} />
      ))}
    </div>
  );
};

export { JobList };
