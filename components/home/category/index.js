import { BsArrowRightCircle } from 'react-icons/bs';
import styles from './styles.module.scss';

function Category({ header, product, background }) {
  return (
    <div className={styles.category} style={{ background: `${background}` }}>
      <div className={styles.category__header}>
        <h1>{header}</h1>
        <BsArrowRightCircle />
      </div>
      <div className={styles.category__products}>
        {product.map((item, i) => (
          <div key={i} className={styles.category__products__product}>
            <img src={item.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
