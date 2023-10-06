import React from 'react';

import './TabsList.scss';

const TabsList = () => {
  return (
    <ul className="tabs">
      <li className="tabs__item checked">
        <label className="tabs__field">
          <input type="radio" name="Tabs" value="cheapest" />
          <span>Самый дешевый</span>
        </label>
      </li>
      <li className="tabs__item false">
        <label className="tabs__field">
          <input type="radio" name="Tabs" value="fastest" />
          <span>Самый быстрый</span>
        </label>
      </li>
      <li className="tabs__item false">
        <label className="tabs__field">
          <input type="radio" name="Tabs" value="optimal" />
          <span>Оптимальный</span>
        </label>
      </li>
    </ul>
  );
};

export default TabsList;
