import React from 'react';

import FilterItem from '../FilterItem';
import './FilterList.scss';

const FILTERS = [
  { name: 'all', label: 'Все' },
  { name: 'noStops', label: 'Без пересадок' },
  { name: 'oneStop', label: '1 пересадка' },
  { name: 'twoStops', label: '2 пересадки' },
  { name: 'threeStops', label: '3 пересадки' },
];

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
        {FILTERS.map((filter) => (
          <li key={filter.name} className="filter__item" onClick={handleItemClick}>
            <FilterItem {...filter} />
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default FilterList;
