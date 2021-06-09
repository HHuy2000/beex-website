import React, {useState} from "react";
import styles from "./TopBar.module.css";
import Image from "next/image";
import Services from "../home/Services"

function TopBar() {
  const [showLinks, setShowLinks] = useState(false);
  return (
    
    <div className={styles.navbar} >
     
      <img src="/images/logo.svg" alt="logo" className={styles.logo}/>
      <div className={styles.navWrapper}>
        <div className={styles.navContent} id={showLinks ? styles.menu : ""}>
          <a href=" "><img src="/images/mainpagebee.svg" alt="minibee" /><span className={styles.span}>Trang chủ</span></a>
          <a href="">Dịch vụ</a>
          <a href="">Gói dịch vụ</a>
          <a href="">Về chúng tôi</a>
        </div>
        <button onClick={()=>setShowLinks(!showLinks)}><img src="/images/menuicon.png" alt="menu icon" /></button>
        
      </div>
      <img src="/images/logo.svg" alt="logo" className={styles.logoMobile}/>
    </div>
  );
}
export default TopBar;