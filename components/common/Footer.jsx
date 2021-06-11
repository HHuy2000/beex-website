import React from 'react'
import styles from "./Footer.module.css";
import Pricing from "../home/Pricing"
import Header from "../home/Header"
import Services from "../home/Services"

function Footer() {
    return (
        <div className={styles.footerBackground}>
        <div className={styles.footer}>
            <div className={styles.footerCopyright}>
                <img src="/images/logo.svg" alt="Logo footer" className={styles.footerCopyrightLogo} />
                <p className={styles.footerCopyrightSlogan}><span className={styles.span}>BeeX</span> là nơi tuyệt vời để bắt đầu hiện thực hoá ý tưởng kinh doanh của bạn.<br/>
                Với những chiến dịch giúp gia tăng doanh số bán hàng từ đó hướng đến sự thành công của doanh nghiệp bạn.</p>
                <p className={styles.footerCopyrightID}>Copyright 2021 © BeeX JSC</p>
            </div>
            <div className={styles.connectUs}>           
                <h1 className={styles.connectUsLabel}>Kết nối với chúng tôi</h1>           
                <div className={styles.connectUsItems}>        
                    <p><img src="/images/phoneicon.svg" alt="Phone icon" /> 0967802598</p>
                    <p><img src="/images/mailicon.svg" alt="Mail icon" /> contact@beex.com</p>
                    <p><img src="/images/facebookicon.svg" alt="Facebook icon" /> BeeX</p>
                    <p><img src="/images/youtubeicon.svg" alt="Youtube icon" /> BeeX</p>
                    <p><img src="/images/mapicon.svg" alt="Map icon" />Ninh Kiều, Cần Thơ</p>
                </div>
            </div>
            <div className={styles.link}>
                <h1 className={styles.linkLabel}>Liên kết</h1>
                <div className={styles.linkItems}>
                <a href="#Header">Trang chủ</a>
                <a href="">Về chúng tôi</a>
                <a href="#Services">Dịch vụ</a>
                <a href="#Pricing">Gói dịch vụ</a>
                <a href="">Điều khoản dịch vụ</a>
                <a href="">Chính sách bảo mật</a>
                </div>
            </div> 
            <img className={styles.footerBackgroundIcon} src="/images/footerbackicon.svg" alt="footer background icon" />  
        </div>

        </div>
    )
}

export default Footer
