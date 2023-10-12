import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setActiveTab } from '../../store/actions/tabsActions';
import { sortTickets } from '../../store/actions/ticketsActions';
import './TabsList.scss';

const TabsList = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.tabs.activeTab);
  const allTickets = useSelector((state) => state.tickets.allTickets);

  const handleTabChange = (event) => {
    const tabValue = event.target.value;
    dispatch(setActiveTab(tabValue));

    let sortedTickets = [...allTickets];
    if (tabValue === 'cheapest') {
      sortedTickets.sort((a, b) => a.price - b.price);
    } else if (tabValue === 'fastest') {
      sortedTickets.sort((a, b) => a.segments[0].duration - b.segments[0].duration);
    } else if (tabValue === 'optimal') {
      sortedTickets = sortedTickets.sort((a, b) => a.price - b.price).slice(0, Math.ceil(sortedTickets.length / 2));
      sortedTickets.sort((a, b) => a.segments[0].duration - b.segments[0].duration);
    }

    dispatch(sortTickets(sortedTickets));
  };

  return (
    <ul className="tabs">
      <li className={`tabs__item ${activeTab === 'cheapest' ? 'checked' : ''}`}>
        <label className="tabs__field">
          <input
            type="radio"
            name="Tabs"
            value="cheapest"
            onChange={handleTabChange}
            checked={activeTab === 'cheapest'}
          />
          <span>Самый дешевый</span>
        </label>
      </li>
      <li className={`tabs__item ${activeTab === 'fastest' ? 'checked' : ''}`}>
        <label className="tabs__field">
          <input
            type="radio"
            name="Tabs"
            value="fastest"
            onChange={handleTabChange}
            checked={activeTab === 'fastest'}
          />
          <span>Самый быстрый</span>
        </label>
      </li>
      <li className={`tabs__item ${activeTab === 'optimal' ? 'checked' : ''}`}>
        <label className="tabs__field">
          <input
            type="radio"
            name="Tabs"
            value="optimal"
            onChange={handleTabChange}
            checked={activeTab === 'optimal'}
          />
          <span>Оптимальный</span>
        </label>
      </li>
    </ul>
  );
};

export default TabsList;
