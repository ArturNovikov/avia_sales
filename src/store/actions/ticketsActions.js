import ApiService from '../../services/apiServices';

import {
  FETCH_SEARCH_ID_REQUEST,
  FETCH_SEARCH_ID_SUCCESS,
  FETCH_SEARCH_ID_ERROR,
  FETCH_TICKETS_REQUEST,
  FETCH_TICKETS_SUCCESS,
  FETCH_TICKETS_ERROR,
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

export const fetchTicketsSuccess = (allTickets) => ({
  type: FETCH_TICKETS_SUCCESS,
  payload: {
    tickets: allTickets,
    stop: true,
  },
});

export const fetchTicketsError = (error) => ({
  type: FETCH_TICKETS_ERROR,
  payload: error,
});

const apiService = new ApiService();

export const fetchTickets = () => async (dispatch) => {
  dispatch(fetchSearchIdRequest());
  try {
    const searchId = await apiService.initSearch();
    console.log(`SearchId from action creator: ${searchId}`);
    dispatch(fetchSearchIdSuccess(searchId));

    dispatch(fetchTicketsRequest());

    const allTickets = await apiService.fetchAllTickets(searchId);
    console.log('All Tickets from action creator async:', allTickets);
    dispatch(fetchTicketsSuccess(allTickets));
  } catch (error) {
    console.error('Error occurred:', error.message);
    dispatch(fetchSearchIdError(error.message));
    dispatch(fetchTicketsError(error.message));
  }
};
