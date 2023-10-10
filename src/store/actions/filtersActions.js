import { TOGGLE_ALL, TOGGLE_FILTER } from './types';

export const toggleAll = () => ({
  type: TOGGLE_ALL,
});

export const toggleFilter = (filterName) => ({
  type: TOGGLE_FILTER,
  payload: filterName,
});
