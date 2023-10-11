import React from 'react';
import './TicketItem.scss';

function formatTime(date) {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

const TicketSegment = ({ segment }) => {
  const startDate = new Date(segment.date);
  const endDate = new Date(startDate.getTime() + segment.duration * 60000);

  const stopsRender = segment.stops.length === 0 ? 'без пересадок' : `${segment.stops.length} пересадка(и)`;

  return (
    <>
      <li>
        <span className="ticket__headers">
          {segment.origin} – {segment.destination}
        </span>
        <br />
        <span className="ticket__data">
          {formatTime(startDate)} – {formatTime(endDate)}
        </span>
      </li>
      <li>
        <span className="ticket__headers">В пути</span>
        <br />
        <span className="ticket__data">
          {Math.floor(segment.duration / 60)}ч {segment.duration % 60}м
        </span>
      </li>
      <li>
        <span className="ticket__headers">{stopsRender}</span>
        <br />
        {segment.stops.length > 0 && <span className="ticket__data">{segment.stops.join(', ')}</span>}
      </li>
    </>
  );
};

const TicketItem = ({ ticket }) => {
  const airlineLogoUrl = `//pics.avs.io/99/36/${ticket.carrier}.png`;

  return (
    <div className="ticket">
      <span className="ticket__cost">{ticket.price} P</span>
      <img src={airlineLogoUrl} alt="Airline Logo" />
      <ul className="ticket__description">
        {ticket.segments.map((segment, index) => (
          <TicketSegment key={index} segment={segment} />
        ))}
      </ul>
    </div>
  );
};

export default TicketItem;
