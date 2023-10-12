import React from 'react';
import { useSelector } from 'react-redux';

import TicketItem from '../TicketItem';
import './TicketsList.scss';

const TicketsList = () => {
  const generateTicketId = (ticket) => {
    return `${ticket.carrier}-${ticket.price}-${ticket.segments[0].date}-${ticket.segments[0].destination}-${ticket.segments[0].origin}-${ticket.segments[0].duration}-${ticket.segments[0].stops.length}`;
  };

  const activeTab = useSelector((state) => state.tabs.activeTab);
  const { allTickets, ticketsToShow } = useSelector((state) => state.tickets);
  const filters = useSelector((state) => state.filters);

  const filteredTickets = allTickets.filter((ticket) => {
    const stopsCount = ticket.segments[0].stops.length;
    if (filters.all) return true;
    if (filters.noStops && stopsCount === 0) return true;
    if (filters.oneStop && stopsCount === 1) return true;
    if (filters.twoStops && stopsCount === 2) return true;
    if (filters.threeStops && stopsCount === 3) return true;
    return false;
  });

  const sortTickets = (tickets, tab) => {
    let sortedTickets = [...tickets];
    if (tab === 'cheapest') {
      sortedTickets.sort((a, b) => a.price - b.price);
    } else if (tab === 'fastest') {
      sortedTickets.sort((a, b) => a.segments[0].duration - b.segments[0].duration);
    } else if (tab === 'optimal') {
      sortedTickets = sortedTickets.sort((a, b) => a.price - b.price).slice(0, Math.ceil(sortedTickets.length / 2));
      sortedTickets.sort((a, b) => a.segments[0].duration - b.segments[0].duration);
    }
    return sortedTickets;
  };

  const filteredAndSortedTickets = sortTickets(filteredTickets, activeTab);
  const currentTickets = filteredAndSortedTickets.slice(0, ticketsToShow);

  if (currentTickets.length === 0) {
    return <p className="no-tickets-message">No flights matching the specified filters were found.</p>;
  }

  return (
    <ul className="tickets-list">
      {currentTickets.map((ticket) => (
        <li key={generateTicketId(ticket)}>
          <TicketItem ticket={ticket} />
        </li>
      ))}
    </ul>
  );
};

export default TicketsList;
