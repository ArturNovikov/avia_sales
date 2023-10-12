import { SET_ACTIVE_TAB } from './types';

export const setActiveTab = (tabValue) => ({
  type: SET_ACTIVE_TAB,
  payload: tabValue,
});
