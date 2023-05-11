import styles from './styles.module.scss';

export default function Payment() {
  return (
    <div className={styles.footer__payments}>
      <h3>We Accept</h3>
      <div className={styles.footer__flexwrap}>
        <img src="../../../images/payment/visa.webp" alt="payment visa" />
        <img src="../../../images/payment/mastercard.webp" alt="payment visa" />
        <img src="../../../images/payment/paypal.webp" alt="payment visa" />
      </div>
    </div>
  );
}
