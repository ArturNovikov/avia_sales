/* eslint-disable indent */
import {
  FETCH_SEARCH_ID_REQUEST,
  FETCH_SEARCH_ID_SUCCESS,
  FETCH_SEARCH_ID_ERROR,
  FETCH_TICKETS_REQUEST,
  FETCH_TICKETS_SUCCESS,
  FETCH_TICKETS_ERROR,
} from '../actions/types';

const initialState = {
  searchId: null,
  tickets: [],
  loading: false,
  error: null,
  stop: false,
};

const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SEARCH_ID_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_SEARCH_ID_SUCCESS:
      return {
        ...state,
        searchId: action.payload,
        loading: false,
      };
    case FETCH_SEARCH_ID_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_TICKETS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_TICKETS_SUCCESS:
      return {
        ...state,
        loading: false,
        tickets: [...state.tickets, ...action.payload.tickets],
        stop: action.payload.stop,
      };
    case FETCH_TICKETS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default ticketsReducer;
