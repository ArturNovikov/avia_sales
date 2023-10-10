import { SET_SORT_BY } from './types';

export const setSortBy = (sortBy) => ({
  type: SET_SORT_BY,
  payload: sortBy,
});
