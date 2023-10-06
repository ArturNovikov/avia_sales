import React from 'react';

import FilterItem from '../FilterItem';

import './FilterList.scss';

const FilterList = () => {
  return (
    <aside className="filter">
      <span className="filter__title">Количество пересадок</span>
      <ul className="filter__list">
        <li className="filter__item">
          <FilterItem />
        </li>
        <li className="filter__item">
          <FilterItem />
        </li>
        <li className="filter__item">
          <FilterItem />
        </li>
        <li className="filter__item">
          <FilterItem />
        </li>
        <li className="filter__item">
          <FilterItem />
        </li>
      </ul>
    </aside>
  );
};

export default FilterList;
