import { combineReducers } from 'redux';

import filtersReducer from './filtersReducer';
import sortReducer from './sortReducer';
import ticketsReducer from './ticketsReducer';
import tabsReducer from './tabsReducer';

const rootReducer = combineReducers({
  tickets: ticketsReducer,
  filters: filtersReducer,
  sort: sortReducer,
  tabs: tabsReducer,
});

export default rootReducer;
