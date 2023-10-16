import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Progress, Space } from 'antd';

import { fetchTickets } from '../../store/actions/ticketsActions';
import Loading from '../Loading';
import TicketsList from '../TicketsList';
import FilterList from '../FilterList';
import TabsList from '../TabsList';
import Pagination from '../Pagination';
import Logo from '../../assets/LogoLogoPlane.svg';
import responsiveStyles from '../../responsive.module.scss';

import styles from './App.module.scss';

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.tickets.loading);
  const progress = useSelector((state) => state.tickets.progress);
  const totalFetchedTickets = useSelector((state) => state.tickets.allTickets.length);

  useEffect(() => {
    dispatch(fetchTickets());
  }, [dispatch]);

  return (
    <div className={`${styles.wrapper__container} ${responsiveStyles.wrapper__container}`}>
      <header className={`${styles.header} ${responsiveStyles.header}`}>
        <img src={Logo} className={styles.header__logo} alt="Logo" />
      </header>
      <main className={`${styles.main} ${responsiveStyles.main}`}>
        <FilterList />
        <div className={`${styles.main__tickets} ${responsiveStyles.main__tickets}`}>
          <TabsList />
          <Space direction="vertical">
            <Progress percent={progress} size={[500, 20]} showInfo={false} className={styles['shiny-progress']} />
          </Space>
          {loading && totalFetchedTickets === 0 ? <Loading /> : <TicketsList />}
          <Pagination />
        </div>
      </main>
    </div>
  );
};

export default App;
