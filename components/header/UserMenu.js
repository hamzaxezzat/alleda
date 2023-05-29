import Image from 'next/image';
import styles from './styles.module.scss';
import Link from 'next/link';
import { signOut, signIn } from 'next-auth/react';

export default function UserMenu({ session }) {
  return (
    <div className={styles.menu}>
      <h4>Welcome to Alleda !</h4>
      {session ? (
        <div className={styles.flex}>
          <img
            src={session.user.image}
            alt="Profile"
            className={styles.menu__img}
          />
          <div className={styles.col}>
            <span>Welcome Back,</span>
            <h3> {session.user.name}</h3>
            <span onClick={() => signOut()}>Sign out</span>
          </div>
        </div>
      ) : (
        <div className={styles.flex}>
          <button className={styles.btn_primary} onClick={() => signIn()}>
            Resister
          </button>
          <button className={styles.btn_outlined} onClick={() => signIn()}>
            Login
          </button>
        </div>
      )}
      <ul>
        <li>
          <Link href="/profile">Account</Link>
        </li>
        <li>
          <Link href="/profile/orders">My Orders</Link>
        </li>
        <li>
          <Link href="/profile/messages">Messages</Link>
        </li>
        <li>
          <Link href="/profile/address">Address</Link>
        </li>
        <li>
          <Link href="/profile/wishlist">Wishlist</Link>
        </li>
      </ul>
    </div>
  );
}
