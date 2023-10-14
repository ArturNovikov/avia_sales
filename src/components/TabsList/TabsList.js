import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import { setActiveTab } from '../../store/actions/tabsActions';
import './TabsList.scss';

const TabItem = ({ value, children }) => {
  const activeTab = useSelector((state) => state.tabs.activeTab);
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(setActiveTab(value));
  };

  return (
    <li className={classNames('tabs__item', { checked: activeTab === value })}>
      <label className="tabs__field">
        <input type="radio" name="Tabs" value={value} onChange={handleChange} checked={activeTab === value} />
        <span>{children}</span>
      </label>
    </li>
  );
};

const TabsList = () => {
  return (
    <ul className="tabs">
      <TabItem value="cheapest">Самый дешевый</TabItem>
      <TabItem value="fastest">Самый быстрый</TabItem>
      <TabItem value="optimal">Оптимальный</TabItem>
    </ul>
  );
};

export default TabsList;
