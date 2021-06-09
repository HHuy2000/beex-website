import React, {useState} from "react";
import styles from "./TopBar.module.css";
import Services from "../home/Services";
import Pricing from "../home/Pricing";
import Header from "../home/Header";
import Image from "next/image";


function TopBar() {
  const [showLinks, setShowLinks] = useState(false);
  return (  
    <div>
    <div className={styles.navbar} > 
      <img src="/images/logo.svg" alt="logo" className={styles.logo}/>
      <div className={styles.navWrapper}>
        <div className={styles.navContent} >
          <a href="#Header"><img src="/images/mainpagebee.svg" alt="minibee" /><span className={styles.span}>Trang chủ</span></a>
          <a href="#ServicesSection">Dịch vụ</a>
          <a href="#Pricing">Gói dịch vụ</a>
          <a href="">Về chúng tôi</a>
        </div>
        <button onClick={()=>setShowLinks(!showLinks)}><img src="/images/menuicon.png" alt="menu icon" /></button>
      </div>
      <img src="/images/logo.svg" alt="logo" className={styles.logoMobile}/>
    </div>
    <div className={styles.navbarMobile}>
      <div className={styles.navWrapperMobile}>
        <div className={styles.navContentMobile} id={showLinks ? styles.menu : ""}>
          <a href="#Header"><img src="/images/mainpagebee.svg" alt="minibee" /><span className={styles.span}>Trang chủ</span></a>
          <a href="#ServicesSection">Dịch vụ</a>
          <a href="#Pricing">Gói dịch vụ</a>
          <a href="">Về chúng tôi</a>
        </div>
      </div>
    </div>
    </div>
  );
}
export default TopBar;
