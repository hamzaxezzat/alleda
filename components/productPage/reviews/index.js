import { Rating } from '@mui/material';
import styles from './styles.module.scss';

export default function Reviews({ product }) {
  return (
    <div className={styles.reviews}>
      <div className={styles.reviews__container}>
        <h1>Customer Reviews ({product.reviews.length})</h1>
        <div className={styles.reviews__stats}>
          <div className={styles.reviews__Stats_overview}>
            <span>Average Rating</span>
            <div className={styles.reviews__stats_overview_rating}>
              <Rating
                name="half-rating-read"
                defaultValue={product.rating}
                precision={0.5}
                readOnly
                style={{ color: '#FACF19' }}
              />
              {product.rating == 0 ? 'No Review' : product.rating}
            </div>
            <div className={styles.reviews__stats_reviews}>
              {product.ratings.map((rating, i) => {
                <div className={styles.reviews__stats_reviews_review}>
                  <Rating
                    name="half-rating-read"
                    defaultValue={5 - i}
                    readOnly
                    style={{ color: '#FACF19' }}
                  />
                  {/* <div className={styles.}></div> */}
                </div>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
