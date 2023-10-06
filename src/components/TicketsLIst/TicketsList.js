import React from 'react';

import TicketItem from '../TicketItem';

import './TicketsList.scss';

const TicketsList = () => {
  return (
    <ul className="tickets-list">
      <li>
        <TicketItem />
      </li>
      <li>
        <TicketItem />
      </li>
      <li>
        <TicketItem />
      </li>
      <li>
        <TicketItem />
      </li>
      <li>
        <TicketItem />
      </li>
    </ul>
  );
};

export default TicketsList;
