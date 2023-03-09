import { useState } from "react"
import styles from "./styles.module.scss"
import {MdSecurity} from "react-icons/md"
import {BsSuitHeart} from "react-icons/bs"
import {RiAccountPinCircleLine, RiArrowDropDownFill} from "react-icons/ri"
import Link from "next/link"
import UserMenu from "./UserMenu"

export default function Top() {
    const [loggedIn,setLoggedIn] = useState(true)
    const [visible,setVisible] = useState(false)
  return (
      <div className={styles.top}>
          <div className={styles.top__container}>
              <div></div>
              <ul className={styles.top__list}>
                  <li className={styles.li}>
                  <img
                      src="https://www.shareicon.net/data/128x128/2015/09/09/98469_flag_512x512.png"
                      alt="Germany"
                  />
                  <span>DE / €</span>
                  </li>
                  <li className={styles.li}>
                      <MdSecurity/>
                      <span>Buyer Protection</span> 
                  </li>
                  <li className={styles.li}>
                      <span>Customer Service</span> 
                  </li>
                  <li className={styles.li}>
                      <span>Help</span> 
                  </li>
                  <li className={styles.li}>
                      <BsSuitHeart />
                      <Link href="/profile/whishlist" legacyBehavior>
                          <span>Whishlist</span> 
                      </Link>
                  </li>
                  
                  <li className={styles.li} onMouseOutCapture={()=> setVisible(true)} onMouseLeave={()=>setVisible(false)}>
                  {
                      loggedIn ? (
                          <li className={styles.li}>
                      <div className={styles.flex}>
                      <img src="https://www.pockettactics.com/wp-content/sites/pockettactics/2021/07/Kayleigh-avatar.jpg" alt="Profile" />
                          <span>name</span>
                          <RiArrowDropDownFill />
                      </div>
                  </li>
                      ):(
                          <li className={styles.li}>
                      <div className={styles.flex}>
                      <RiAccountPinCircleLine />
                          <span>Account</span>
                          <RiArrowDropDownFill/>
                      </div>
                  </li>
                      )
                  }
                  {visible && <UserMenu loggedIn = {loggedIn}  />}
                  </li>
              </ul>
          </div>
      </div>
  );
}
