import React from 'react';
import { useDispatch } from 'react-redux';

import { loadMoreTickets } from '../../store/actions/ticketsActions';
import responsiveStyles from '../../responsive.module.scss';

import styles from './Pagination.module.scss';

const Pagination = () => {
  const dispatch = useDispatch();

  const handleLoadMore = () => {
    setTimeout(() => {
      dispatch(loadMoreTickets());
    }, 50);
  };

  return (
    <button className={`${styles.pagination} ${responsiveStyles.pagination}`} onClick={handleLoadMore}>
      <span>Показать еще 5 билетов!</span>
    </button>
  );
};

export default Pagination;
