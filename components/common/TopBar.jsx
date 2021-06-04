import React from "react";
import styles from "./TopBar.module.css";
import Image from "next/image";

function TopBar() {
  return (
    <div className={styles.navbar}>
      <img src="/images/logo.svg" alt="logo" className={styles.logo}/>
      <div className={styles.trangchu}>
        <img className={styles.trangchulogo} src="/images/mainpagebee.svg" alt="minibee" />
        <a href="" className={styles.trangchutext} ><span className={styles.span}>Trang chủ</span></a>
      </div>
      <a href=""className={styles.navitem}>Dịch vụ</a>
      <a href=""className={styles.navitem}>Gói của chúng tôi</a>
      <a href=""className={styles.navitem}>Về chúng tôi</a>
    </div>
  );
}

export default TopBar;