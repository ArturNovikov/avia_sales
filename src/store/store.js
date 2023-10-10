import { createStore, combineReducers } from 'redux';

import filtersReducer from './reducers/filtersReducer';
import sortReducer from './reducers/sortReducer';

const rootReducer = combineReducers({
  filters: filtersReducer,
  sort: sortReducer,
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
