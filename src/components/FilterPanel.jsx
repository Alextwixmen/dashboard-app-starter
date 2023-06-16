import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';
import { useSelector, useDispatch } from 'react-redux';
import { filterSelector } from '../store/filters/filter-selectors';
import {
  addFilter,
  removeFilter,
  clearFilter,
} from '../store/filters/filter-actions';
const FilterPanel = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector(filterSelector);
  if (currentFilters.length === 0) return null;
  return (
    <Card className='filter-panel'>
      <div className='filter-panel-wrapper'>
        <Stack>
          {currentFilters.map((filter) => (
            <Badge
              variant='clearable'
              key={filter}
              onClear={() => dispatch(removeFilter(filter))}
            >
              {filter}
            </Badge>
          ))}
        </Stack>

        <button className='link' onClick={() => dispatch(clearFilter)}>
          Clear
        </button>
      </div>
    </Card>
  );
};

export { FilterPanel };
