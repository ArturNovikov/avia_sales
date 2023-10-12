import React from 'react';

import FilterItem from '../FilterItem';

import './FilterList.scss';

const FilterList = () => {
  const handleItemClick = (e) => {
    const inputElement = e.currentTarget.querySelector('.filter__input');
    if (inputElement && e.target !== inputElement && e.target.tagName !== 'LABEL' && e.target.tagName !== 'SPAN') {
      inputElement.click();
    }
  };

  return (
    <aside className="filter">
      <span className="filter__title">Количество пересадок</span>
      <ul className="filter__list">
        <li className="filter__item" onClick={handleItemClick}>
          <FilterItem name="all" label="Все" />
        </li>
        <li className="filter__item" onClick={handleItemClick}>
          <FilterItem name="noStops" label="Без пересадок" />
        </li>
        <li className="filter__item" onClick={handleItemClick}>
          <FilterItem name="oneStop" label="1 пересадка" />
        </li>
        <li className="filter__item" onClick={handleItemClick}>
          <FilterItem name="twoStops" label="2 пересадки" />
        </li>
        <li className="filter__item" onClick={handleItemClick}>
          <FilterItem name="threeStops" label="3 пересадки" />
        </li>
      </ul>
    </aside>
  );
};

export default FilterList;
