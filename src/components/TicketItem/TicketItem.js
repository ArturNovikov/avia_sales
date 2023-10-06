import React from 'react';

import S7Logo from '../../assets/S7Logo.svg';
import './TicketItem.scss';

const TicketItem = () => {
  return (
    <div className="ticket">
      <span className="ticket__cost">13370 P</span>
      <img src={S7Logo} alt="Airline Logo" />
      <ul className="ticket__description">
        <li>
          <span className="ticket__headers">MOW – HKT</span>
          <br />
          <span>10:45 – 08:00</span>
        </li>
        <li>
          <span className="ticket__headers">В пути</span>
          <br />
          <span>21ч 15м</span>
        </li>
        <li>
          <span className="ticket__headers">2 пересадки</span>
          <br />
          <span>MOW – HKT</span>
        </li>
        <li>
          <span className="ticket__headers">MOW – HKT</span>
          <br />
          <span>11:20 – 00:50</span>
        </li>
        <li>
          <span className="ticket__headers">В пути</span>
          <br />
          <span>13ч 30м</span>
        </li>
        <li>
          <span className="ticket__headers">1 пересадка</span>
          <br />
          <span>HKG</span>
        </li>
      </ul>
    </div>
  );
};

export default TicketItem;
