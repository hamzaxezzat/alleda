import Link from "next/link"
import styles from "./style.module.scss"
import Image from "next/image"
import { RiSearch2Line } from "react-icons/ri"
import { FaOpencart } from "react-icons/fa"
import { useSelector } from "react-redux"


export default function Main() {
    const {cart} = useSelector((state)=>({...state}))
  return (
    <div className={styles.Main}>
        <div className={styles.main__container}>
            <Link href="/">
                <Image 
                 src="/logo.png"
                 alt="Picture of the author"
                 width={100}
                 height={100}
                />
                {/* <img src="../../../logo.png" alt="Logo"/> */}
            </Link>
            <div className={styles.search}>
                <input type="text" placeholder="Search ..."/>
                <div className={styles.search__icon}>
                    <RiSearch2Line />
                </div>
            </div>
                <Link href="/cart">
                    <div className={styles.cart}>
                        <FaOpencart />
                        <span>0</span>
                    </div>
                </Link>
        </div>
        
    </div>
  )
}
