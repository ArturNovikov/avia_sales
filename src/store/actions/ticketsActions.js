import ApiService from '../../services/apiServices';

import {
  FETCH_SEARCH_ID_REQUEST,
  FETCH_SEARCH_ID_SUCCESS,
  FETCH_SEARCH_ID_ERROR,
  FETCH_TICKETS_REQUEST,
  FETCH_TICKETS_SUCCESS,
  FETCH_TICKETS_ERROR,
  LOAD_MORE_TICKETS,
  SORT_TICKETS,
} from './types';

export const fetchSearchIdRequest = () => ({
  type: FETCH_SEARCH_ID_REQUEST,
});

export const fetchSearchIdSuccess = (searchId) => ({
  type: FETCH_SEARCH_ID_SUCCESS,
  payload: searchId,
});

export const fetchSearchIdError = (error) => ({
  type: FETCH_SEARCH_ID_ERROR,
  payload: error,
});

export const fetchTicketsRequest = () => ({
  type: FETCH_TICKETS_REQUEST,
});

export const fetchTicketsSuccess = (data) => ({
  type: FETCH_TICKETS_SUCCESS,
  payload: {
    tickets: data.tickets,
    stop: true,
  },
});

export const fetchTicketsError = (error) => ({
  type: FETCH_TICKETS_ERROR,
  payload: error,
});

export const loadMoreTickets = () => ({
  type: LOAD_MORE_TICKETS,
});

export const sortTickets = (sortedTickets) => ({
  type: SORT_TICKETS,
  payload: sortedTickets,
});

const apiService = new ApiService();

export const fetchTickets = () => async (dispatch) => {
  dispatch(fetchSearchIdRequest());
  try {
    const searchId = await apiService.initSearch();
    dispatch(fetchSearchIdSuccess(searchId));

    dispatch(fetchTicketsRequest());

    let stop = false;
    while (!stop) {
      const batch = await apiService.fetchBatchTickets(searchId);
      stop = batch.stop;

      dispatch(fetchTicketsSuccess(batch));
    }
  } catch (error) {
    console.error('Error occurred:', error.message);
    dispatch(fetchSearchIdError(error.message));
    dispatch(fetchTicketsError(error.message));
  }
};
