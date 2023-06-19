import { useState } from 'react';
import styles from './styles.module.scss';
import usePagination from './Pagination';
import { Pagination } from '@mui/material';
import Review from './Review';

export default function Table({ reviews }) {
  const [page, setPage] = useState(1);
  const PER_PAGE = 3;
  const count = Math.ceil(reviews.length / PER_PAGE);
  const _DATA = usePagination(reviews, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  return (
    <div className={styles.table}>
      <div className={styles.table__header}>
        <div className={styles.table__data}>
          {_DATA.currentData().map((review, i) => (
            <Review key={i} review={review} />
          ))}
        </div>
        <div className={styles.pagination}>
          <Pagination
            count={count}
            page={page}
            variant="round"
            shape="rounded"
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}
