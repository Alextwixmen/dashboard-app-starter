import { createSlice } from '@reduxjs/toolkit';

export const positionSlice = createSlice({
  name: '@@position',
  initialState: [],
  reducers: {
    addPositions: (state, action) => action.payload,
  },
});

export const { addPositions } = positionSlice.actions;
export const positionReducer = positionSlice.reducer;

export const selectVisiblePositions = (state, filters = []) => {
  if (!filters.length) return state.positions;

  return state.positions.filter((pos) => {
    const posFilters = [].concat(
      pos.role,
      pos.level,
      ...pos.languages,
      ...pos.tools
    );
    return filters.every((filter) => posFilters.includes(filter));
  });
};
