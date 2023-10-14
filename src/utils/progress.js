export const calculateProgress = (currentState, payload) => {
  const totalTickets = currentState.totalTickets;
  const newLoadedTickets = currentState.loadedTickets + payload.tickets.length;

  let newProgress = (newLoadedTickets / totalTickets) * 100;

  if (payload.stop) {
    newProgress = 100;
  }

  return newProgress;
};
