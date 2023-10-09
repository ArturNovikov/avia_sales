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
          <FilterItem name="noStop" label="Без пересадок" />
        </li>
        <li className="filter__item">
          <FilterItem name="oneStope" label="1 пересадка" />
        </li>
        <li className="filter__item">
          <FilterItem name="twoStop" label="2 пересадки" />
        </li>
        <li className="filter__item">
          <FilterItem name="threeStop" label="3 пересадки" />
        </li>
      </ul>
    </aside>
  );
};

export default FilterList;
