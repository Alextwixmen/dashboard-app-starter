import { ADD_FILTER, REMOVE_FILTER, CLEAR_FILTER } from './filter-actions';

export const filterReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_FILTER: {
      // проверка на то, чтобы два раза в стейт не добавлять один и тот же фильтр на клик от пользователя
      if (state.includes(action.filter)) {
        return state;
      }
      return [...state, action.filter];
    }
    case REMOVE_FILTER: {
      return state.filter((item) => action.filter !== item);
    }
    case CLEAR_FILTER: {
      return [];
    }
    default: {
      return state;
    }
  }
};
