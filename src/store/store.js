import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';

const actionSanitizer = (action) => {
  if (action.type === 'FETCH_TICKETS_REQUEST') {
    return { ...action, payload: 'HIDDEN' };
  }
  return action;
};

const stateSanitizer = (state) => ({
  ...state,
  someSensitiveField: 'HIDDEN',
});

const composeEnhancers = composeWithDevTools({
  maxAge: 15,
  shouldRecordChanges: true,
  shouldCatchErrors: true,
  limit: 500,
  trace: false,
  actionSanitizer,
  stateSanitizer,
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
