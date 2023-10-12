/* eslint-disable no-case-declarations */
/* eslint-disable indent */
import { SET_ACTIVE_TAB } from '../actions/types';

const initialState = {
  activeTab: 'cheapest',
};

const tabsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_TAB:
      return {
        ...state,
        activeTab: action.payload,
      };
    default:
      return state;
  }
};

export default tabsReducer;
