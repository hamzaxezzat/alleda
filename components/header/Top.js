import styles from "./style.module.scss"
import {MdSecurity} from "react-icons/md"
import {BsSuitHeart} from "react-icons/bs"
import {RiAccountPinCircleLine, RiArrowDropDownFill} from "react-icons/ri"
import Link from "next/link"
export default function Top() {
  return (
    <div className={styles.top}>
        <div className={styles.top__container}>
            <div></div>
            <ul className={styles.top__list}>
                <li>
                <img
                    src="https://www.shareicon.net/data/128x128/2015/09/09/98469_flag_512x512.png"
                    alt="Germany"
                />
                <span>Germany - €</span>
                </li>
                <li>
                    <MdSecurity/>
                    <span>Buyer Protection</span> 
                </li>
                <li>
                    <span>Customer Service</span> 
                </li>
                <li>
                    <span>Help</span> 
                </li>
                <li>
                    <BsSuitHeart />
                    <Link href="/profile/whishlist">
                        <span>Whishlist</span> 
                    </Link>
                </li>
                <li>
                    <div className={styles.flex}>
                    <RiAccountPinCircleLine />
                        <span>Account</span>
                        <RiArrowDropDownFill/>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}
