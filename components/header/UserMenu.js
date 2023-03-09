import Image from "next/image"
import styles from "./style.module.scss"
import Link from "next/link"

export default function UserMenu({loggedIn}) {
  return (
    <div className={styles.menu}>
        <h4>Welcome to Alleda !</h4>
            {loggedIn?
              (
                <div className={styles.flex}>
                    <img 
                    src="https://www.pockettactics.com/wp-content/sites/pockettactics/2021/07/Kayleigh-avatar.jpg"
                    alt="Profile"
                    className={styles.menu__img}
                    />
                    <div className={styles.col}>
                        <span>Welcome Back,</span>
                        <h3> Hamza</h3>
                        <span>Sign out</span>
                    </div>
                </div>
              ):
              (
                <div className={styles.flex}>
                    <button className={styles.btn_primary}>Resister</button>
                    <button className={styles.btn_outlined}>Login</button>
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

  )
}
