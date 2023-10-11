import { combineReducers } from 'redux';

import filtersReducer from './filtersReducer';
import sortReducer from './sortReducer';
import ticketsReducer from './ticketsReducer';

const rootReducer = combineReducers({
  tickets: ticketsReducer,
  filters: filtersReducer,
  sort: sortReducer,
});

export default rootReducer;
