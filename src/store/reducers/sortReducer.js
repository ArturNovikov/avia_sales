/* eslint-disable indent */
import { SET_SORT_BY } from '../actions/types';

const initialState = {
  sortBy: 'price',
};

const sortReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
      };
    default:
      return state;
  }
};

export default sortReducer;
