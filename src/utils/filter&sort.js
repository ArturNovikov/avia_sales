export const filterTickets = (tickets, filters) => {
  return tickets.filter((ticket) => {
    const stopsCount = ticket.segments[0].stops.length;
    if (filters.all) return true;
    if (filters.noStops && stopsCount === 0) return true;
    if (filters.oneStop && stopsCount === 1) return true;
    if (filters.twoStops && stopsCount === 2) return true;
    if (filters.threeStops && stopsCount === 3) return true;
    return false;
  });
};

export const sortTickets = (tickets, tab) => {
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
