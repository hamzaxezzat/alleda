import { BsArrowRightCircle } from 'react-icons/bs';
import styles from './styles.module.scss';
import { useMediaQuery } from 'react-responsive';

function Category({ header, product, background }) {
  const isMedium = useMediaQuery({ query: '(max-width:1300px)' });
  const isMobile = useMediaQuery({ query: '(max-width:550px)' });
  return (
    <div className={styles.category} style={{ background: `${background}` }}>
      <div className={styles.category__header}>
        <h1>{header}</h1>
        <BsArrowRightCircle />
      </div>
      <div className={styles.category__products}>
        {product.slice(0, isMobile ? 6 : isMedium ? 4 : 6).map((item, i) => (
          <div key={i} className={styles.category__products__product}>
            <img src={item.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
