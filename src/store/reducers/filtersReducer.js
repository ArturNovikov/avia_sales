/* eslint-disable no-case-declarations */
/* eslint-disable indent */
import { TOGGLE_ALL, UNSET_ALL, TOGGLE_FILTER } from '../actions/types';

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
    case UNSET_ALL:
      return {
        ...state,
        all: false,
        noStops: false,
        oneStop: false,
        twoStops: false,
        threeStops: false,
      };
    case TOGGLE_FILTER:
      const updatedState = {
        ...state,
        [action.payload]: !state[action.payload],
      };
      const filtersExceptAll = ['noStops', 'oneStop', 'twoStops', 'threeStops'];
      updatedState.all = filtersExceptAll.every((filter) => updatedState[filter]);
      return updatedState;
    default:
      return state;
  }
};

export default filtersReducer;
