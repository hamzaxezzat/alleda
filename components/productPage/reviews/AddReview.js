import { useState } from 'react';
import Select from './Select';
import styles from './styles.module.scss';

export default function AddReview({ product }) {
  const [size, setSize] = useState('');
  const [style, setStyle] = useState('');
  console.log('productColor', product.colors);
  return (
    <div className={styles.reviews__add}>
      <div className={`${styles.flex} ${styles.wrap}`}>
        <div className={styles.flex} style={{ gap: '10px' }}>
          <Select
            property={size}
            text="Size"
            data={product.allSizes.filter((x) => x.size !== size)}
            handleChange={setSize}
          />

          <Select
            property={style}
            text="Style"
            data={product.colors.filter((x) => x !== style)}
            handleChange={setStyle}
          />
        </div>
      </div>
    </div>
  );
}
