import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import TicketItem from '../TicketItem';
import { filterTickets, sortTickets } from '../../utils/filterAndSort';

import styles from './TicketsList.module.scss';

const TicketsList = () => {
  const generateTicketId = (ticket) => {
    return `${ticket.carrier}-${ticket.price}-${ticket.segments[0].date}-${ticket.segments[0].destination}-${ticket.segments[0].origin}-${ticket.segments[0].duration}-${ticket.segments[0].stops.length}`;
  };

  const activeTab = useSelector((state) => state.tabs.activeTab);
  const { allTickets, ticketsToShow } = useSelector((state) => state.tickets);
  const filters = useSelector((state) => state.filters);

  const filteredTickets = useMemo(() => {
    return filterTickets(allTickets, filters);
  }, [allTickets, filters]);

  const filteredAndSortedTickets = useMemo(() => {
    return sortTickets(filteredTickets, activeTab);
  }, [filteredTickets, activeTab]);

  const currentTickets = filteredAndSortedTickets.slice(0, ticketsToShow);

  if (currentTickets.length === 0) {
    return <p className={styles['no-tickets-message']}>Рейсов, подходящих под заданные фильтры, не найдено.</p>;
  }

  return (
    <ul className={styles.tickets__list}>
      {currentTickets.map((ticket) => (
        <li key={generateTicketId(ticket)}>
          <TicketItem ticket={ticket} />
        </li>
      ))}
    </ul>
  );
};

export default TicketsList;
