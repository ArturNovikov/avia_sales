/* eslint-disable no-case-declarations */
/* eslint-disable indent */
import { TOGGLE_ALL, TOGGLE_FILTER } from '../actions/types';

const initialState = {
  all: false,
  noStops: false,
  oneStop: false,
  twoStops: false,
  threeStops: false,
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ALL:
      const allChecked = !state.all;
      return {
        all: allChecked,
        noStops: allChecked,
        oneStop: allChecked,
        twoStops: allChecked,
        threeStops: allChecked,
      };

    case TOGGLE_FILTER:
      const updatedState = {
        ...state,
        [action.payload]: !state[action.payload],
      };

      const filtersExceptAll = ['noStops', 'oneStop', 'twoStops', 'threeStops'];
      if (filtersExceptAll.every((filter) => updatedState[filter])) {
        updatedState.all = true;
      } else {
        updatedState.all = false;
      }
      return updatedState;

    default:
      return state;
  }
};

export default filtersReducer;
