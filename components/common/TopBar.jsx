import React from "react";
import styles from "./TopBar.module.css";
import Image from "next/image";

function TopBar() {
  return (
    <div className={styles.navbar}>
      <img src="/images/logo.svg" alt="logo" className={styles.logo}/>
      <div className={styles.navitem} className={styles.trangchu}>
        <img className={styles.trangchulogo} src="/images/mainpagebee.svg" alt="minibee" />
        <h1 className={styles.trangchutext} ><span className={styles.span}>Trang chủ</span></h1>
      </div>
      <h1 className={styles.navitem}>Dịch vụ</h1>
      <h1 className={styles.navitem}>Gói dịch vụ</h1>
      <h1 className={styles.navitem}>Về chúng tôi</h1>
    </div>
  );
}

export default TopBar;