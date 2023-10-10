import React, { useState, useEffect } from 'react';

import ApiService from '../../services';
import Loading from '../Loading';
import TicketsList from '../TicketsLIst';
import FilterList from '../FilterList';
import TabsList from '../TabsList';
import Pagination from '../Pagination';
import Logo from '../../assets/LogoLogoPlane.svg';

import './App.scss';

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const apiService = new ApiService();
    let searchId;

    apiService
      .initSearch()
      .then((receivedSearchId) => {
        searchId = receivedSearchId;
        return apiService.fetchBatchTickets(searchId);
      })
      .then((dataTickets) => {
        return [searchId, dataTickets];
      })
      .then(([searchId, dataTickets]) => {
        return apiService.fetchAllTickets(searchId, dataTickets.tickets);
      })
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error during fetching tickets: ', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="wrapper__container">
      <header className="header">
        <img src={Logo} className="header__logo" alt="Logo" />
      </header>
      <main className="main">
        <FilterList />
        <div className="main__tickets">
          <TabsList />
          {loading ? <Loading /> : <TicketsList />}
          <Pagination />
        </div>
      </main>
    </div>
  );
};

export default App;
