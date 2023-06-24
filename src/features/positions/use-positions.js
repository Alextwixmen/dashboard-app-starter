import { useSelector } from 'react-redux';
import { selectVisiblePositions } from './position-slice';
import { filterSelector } from 'features/filter/filter-slice';
export const usePositions = () => {
  const currentFilters = useSelector(filterSelector);
  const positions = useSelector((state) =>
    selectVisiblePositions(state, currentFilters)
  );
  return positions;
};
