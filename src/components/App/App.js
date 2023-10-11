import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchTickets } from '../../store/actions/ticketsActions';
import Loading from '../Loading';
import TicketsList from '../TicketsList';
import FilterList from '../FilterList';
import TabsList from '../TabsList';
import Pagination from '../Pagination';
import Logo from '../../assets/LogoLogoPlane.svg';

import './App.scss';

const App = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchTickets());
    setLoading(false);
  }, [dispatch]);

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
