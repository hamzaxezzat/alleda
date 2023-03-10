import styles from "./styles.module.scss";
import Link from "next/link"

export default function NewsLetter() {
  return (
    <div className={styles.footer__newsletter}>
        <h3>Sign up for our Newsletter</h3>
        <div className={styles.footer__flex}>
            <input type="text" placeholder="Your Email Address" />
            <button className={styles.btn_primary}>Subscribe</button>
        </div>
        <p>
            By clicking the SUBSCRIBE button, you are agreeing to
            <Link href= ""> ourPrivacy & Cookie Policy</Link>
        </p>
        
        
    </div>
  )
}
