import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as idGenerator } from 'uuid';

import TicketItem from '../TicketItem';

import './TicketsList.scss';

const TicketsList = () => {
  const tickets = useSelector((state) => state.tickets.tickets);

  return (
    <ul className="tickets-list">
      {tickets.map((ticket) => (
        <li key={idGenerator()}>
          <TicketItem ticket={ticket} />
        </li>
      ))}
    </ul>
  );
};

export default TicketsList;
