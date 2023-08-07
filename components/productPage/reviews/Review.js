import { Rating } from '@mui/material';
import styles from './styles.module.scss';
import { AiOutlineLike } from 'react-icons/ai';
export default function Review({ review }) {
  //   const { image } = review.reviewBy ;
  //   const { name } = review.reviewBy || 'User';
  const name = 'User';
  const image = 'https://cdn.ipregistry.co/flags/emojitwo/de.svg';
  return (
    <div className={styles.review}>
      <div className={styles.flex}>
        <div className={styles.review__user}>
          <h4>
            {name.slice(0, 1)}***{name.slice(name.length - 1, name.length)}
          </h4>
          <img src={image} alt="" />
        </div>
        <div className={styles.review__review}>
          <Rating
            name="half-rating-read"
            value={review.rating}
            precision={0.5}
            readOnly
            style={{ color: '#facf19' }}
          />
          <p>{review.review}</p>
          <p>
            <span>Overall Fit:</span>
            {review.fit}
            &nbsp;&nbsp;
            <span>Size:</span>
            {review.size}
            &nbsp;&nbsp;
            <span className={styles.flex}>
              <img
                src={review.style.image}
                alt=""
                className={styles.review__img}
              />
            </span>
          </p>
        </div>
      </div>
      <div className={styles.flex}>
        <div className={styles.review__images}>
          {review.images.length > 0 &&
            review.images.map((img, i) => (
              <img key={i} src={img?.url} alt="" />
            ))}
        </div>
        <div className={styles.review__extra}>
          <div className={styles.review__extra_likes}>
            {review.likes && review.likes?.likes}
            <AiOutlineLike />
          </div>
          <div className={styles.review__extra_date}>
            {review?.updatedAt?.slice(0, 10)}
          </div>
        </div>
      </div>
    </div>
  );
}
