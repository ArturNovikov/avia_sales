import React from 'react';

import FilterItem from '../FilterItem';
import filterItemStyles from '../FilterItem/FilterItem.module.scss';

import styles from './FilterList.module.scss';

const FILTERS = [
  { name: 'all', label: 'Все' },
  { name: 'noStops', label: 'Без пересадок' },
  { name: 'oneStop', label: '1 пересадка' },
  { name: 'twoStops', label: '2 пересадки' },
  { name: 'threeStops', label: '3 пересадки' },
];

const FilterList = () => {
  const handleItemClick = (e) => {
    const inputElement = e.currentTarget.querySelector(`.${filterItemStyles.filter__input}`);
    if (inputElement && e.target !== inputElement && e.target.tagName !== 'LABEL' && e.target.tagName !== 'SPAN') {
      inputElement.click();
    }
  };

  return (
    <aside className={styles.filter}>
      <span className={styles.filter__title}>Количество пересадок</span>
      <ul className={styles.filter__list}>
        {FILTERS.map((filter) => (
          <li key={filter.name} className={styles.filter__item} onClick={handleItemClick}>
            <FilterItem {...filter} />
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default FilterList;
