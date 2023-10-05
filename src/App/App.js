import React, { useEffect } from 'react';

import ApiService from '../services'
import Loading from '../Loading';

const App = () => {
  useEffect(() => {
    const apiService = new ApiService();

    apiService.initSearch().then((searchId) => {
      console.log('Received searchId: ', searchId);

      apiService.fetchBatchTickets(searchId).then((dataTickets) => {
        console.log('Received data tickets: ', dataTickets);

        apiService.fetchAllTickets(searchId, dataTickets.tickets).then((allTickets) => {
          console.log('All received tickets: ', allTickets);
        });
      });
    });
  }, []);
  return (
    <>
      <Loading />
    </>
  );
};

export default App;
