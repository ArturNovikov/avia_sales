import React from 'react';

import FilterItem from '../FilterItem';

import './FilterList.scss';

const FilterList = () => {
  return (
    <aside className="filter">
      <span className="filter__title">Количество пересадок</span>
      <ul className="filter__list">
        <li className="filter__item">
          <FilterItem name="all" label="Все" />
        </li>
        <li className="filter__item">
          <FilterItem name="noStops" label="Без пересадок" />
        </li>
        <li className="filter__item">
          <FilterItem name="oneStop" label="1 пересадка" />
        </li>
        <li className="filter__item">
          <FilterItem name="twoStops" label="2 пересадки" />
        </li>
        <li className="filter__item">
          <FilterItem name="threeStops" label="3 пересадки" />
        </li>
      </ul>
    </aside>
  );
};

export default FilterList;
