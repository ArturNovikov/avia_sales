import React from 'react';
import { useDispatch } from 'react-redux';

import { loadMoreTickets } from '../../store/actions/ticketsActions';

import './Pagination.scss';

const Pagination = () => {
  const dispatch = useDispatch();

  const handleLoadMore = () => {
    setTimeout(() => {
      dispatch(loadMoreTickets());
    }, 50);
  };

  return (
    <button className="pagination" onClick={handleLoadMore}>
      <span>Показать еще 5 билетов!</span>
    </button>
  );
};

export default Pagination;
