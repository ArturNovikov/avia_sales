import React from 'react';

import './FilterItem.scss';

const FilterItem = () => {
  return (
    <label className="filter__field">
      <input className="filter_input" type="checkbox" name="All" />
      <span className="filter__name">Все</span>
    </label>
  );
};

export default FilterItem;
