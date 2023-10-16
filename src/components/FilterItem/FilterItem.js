import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import { toggleFilter, toggleAll } from '../../store/actions/filtersActions';

import styles from './FilterItem.module.scss';

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
    <label className={classNames(styles.filter__field, { [styles.checked]: isChecked })}>
      <input
        className={styles.filter__input}
        type="checkbox"
        name={name}
        checked={isChecked}
        onChange={handleInputChange}
      />
      <span className={styles.filter__name}>{label}</span>
    </label>
  );
};

export default FilterItem;
