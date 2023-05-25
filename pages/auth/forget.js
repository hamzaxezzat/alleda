import { BiLeftArrowAlt } from 'react-icons/bi';
import Footer from '../../components/footer';
import Header from '../../components/header';
import styles from '../../styles/forget.module.scss';
import Link from 'next/link';

export default function forget() {
  return (
    <>
      <Header country="" />
      <div className={styles.forget}>
        <div>
          <div className={styles.forget__header}>
            <div className={styles.back__svg}>
              <BiLeftArrowAlt />
            </div>
            <span>
              Forget your password?<Link href="/">Login Instead</Link>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
