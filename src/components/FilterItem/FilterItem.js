import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import './FilterItem.scss';
import { toggleFilter, toggleAll } from '../../store/actions/filtersActions';

const FilterItem = ({ label, name }) => {
  const dispatch = useDispatch();
  const isChecked = useSelector((state) => state.filters[name]);

  const handleInputChange = () => {
    if (name === 'all') {
      dispatch(toggleAll());
    } else {
      dispatch(toggleFilter(name));
    }
  };

  return (
    <label className={classNames('filter__field', { checked: isChecked })}>
      <input className="filter__input" type="checkbox" name={name} checked={isChecked} onChange={handleInputChange} />
      <span className="filter__name">{label}</span>
    </label>
  );
};

export default FilterItem;
