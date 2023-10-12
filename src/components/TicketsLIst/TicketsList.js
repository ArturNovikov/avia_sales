import React from 'react';
import { useSelector } from 'react-redux';

import TicketItem from '../TicketItem';

import './TicketsList.scss';

const TicketsList = () => {
  const generateTicketId = (ticket) => {
    return `${ticket.carrier}-${ticket.price}-${ticket.segments[0].date}-${ticket.segments[0].destination}-${ticket.segments[0].origin}-${ticket.segments[0].duration}-${ticket.segments[0].stops.length}`;
  };

  const { allTickets, ticketsToShow } = useSelector((state) => state.tickets);

  const currentTickets = allTickets.slice(0, ticketsToShow);

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
