import React, { useState } from 'react';
import classNames from 'classnames';
import './FilterItem.scss';

const FilterItem = ({ label, name }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleInputChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className={classNames('filter__field', { checked: isChecked })}>
      <input className="filter__input" type="checkbox" name={name} onChange={handleInputChange} />
      <span className="filter__name">{label}</span>
    </label>
  );
};

export default FilterItem;
