// import data from '../mock/data.json';
import { JobPosition } from './JobPosition';
import { useDispatch } from 'react-redux';

import { usePositions } from './use-positions';
import { useFetchPositions } from './use-fetch-position';
import { addFilter } from 'features/filter/filter-slice';
const JobList = () => {
  useFetchPositions();
  const positions = usePositions();
  const dispatch = useDispatch();

  const handleFilter = (filter) => dispatch(addFilter(filter));
  //
  return (
    <div className='job-list'>
      {positions.map((item) => (
        <JobPosition key={item.id} {...item} handleFilter={handleFilter} />
      ))}
    </div>
  );
};

export { JobList };
