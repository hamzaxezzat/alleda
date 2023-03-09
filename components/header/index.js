// import React from 'react'

 import Ad from "./Ad"
import Top from "./Top"
import styles from "./style.module.scss"

export default function Header() {
  return (
    <header className={styles.header}>
        <Ad />
        <Top />
    </header>
  )
}
