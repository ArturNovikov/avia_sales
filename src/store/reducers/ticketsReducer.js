/* eslint-disable indent */
import { calculateProgress } from '../../utils/progress';
import {
  FETCH_SEARCH_ID_REQUEST,
  FETCH_SEARCH_ID_SUCCESS,
  FETCH_SEARCH_ID_ERROR,
  FETCH_TICKETS_REQUEST,
  FETCH_TICKETS_SUCCESS,
  FETCH_TICKETS_ERROR,
  LOAD_MORE_TICKETS,
  SORT_TICKETS,
} from '../actions/types';

const initialState = {
  searchId: null,
  tickets: [],
  loading: false,
  error: null,
  stop: false,
  allTickets: [],
  ticketsToShow: 5,
  totalTickets: 10000,
  loadedTickets: 0,
  progress: 0,
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
        allTickets: [...state.allTickets, ...action.payload.tickets],
        loadedTickets: state.loadedTickets + action.payload.tickets.length,
        stop: action.payload.stop,
        progress: calculateProgress(state, action.payload),
      };
    case FETCH_TICKETS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case LOAD_MORE_TICKETS:
      return {
        ...state,
        ticketsToShow: state.ticketsToShow + 5,
      };
    case SORT_TICKETS:
      return {
        ...state,
        tickets: action.payload,
      };
    default:
      return state;
  }
};

export default ticketsReducer;
