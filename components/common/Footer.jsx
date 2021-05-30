import React from 'react'
import styles from "./Footer.module.css";

function Footer() {
    return (
        <div className={styles.footerItems}>
            <div className={styles.copyright}>
                <div className={styles.copyrighttop}>
                <img src="/images/logo.svg" alt="Logo footer" className={styles.copyrightlogo} />
                <p><span className={styles.span}>BeeX</span> là nơi tuyệt vời để bắt đầu hiện thực hoá ý tưởng kinh doanh của bạn.<br/>
                Với những chiến dịch giúp gia tăng doanh số bán hàng từ đó hướng đến sự thành công của doanh nghiệp bạn.</p>
                </div>
                <div className={styles.copyrightbottom}>
                <p>Copyright 2021 © BeeX JSC</p>
                </div>
            </div>
            <div>
                <div>
                <h1 className={styles.connectUsLabel}>Kết nối với chúng tôi</h1>
                </div>
                <div className={styles.connectUsItemWrapper}>
                    <div className={styles.connectUsIconItems}>
                        <img src="/images/phoneicon.svg" alt="Phone icon" />
                        <img src="/images/mailicon.svg" alt="Mail icon" />
                        <img src="/images/facebookicon.svg" alt="Facebook icon" />
                        <img src="/images/youtubeicon.svg" alt="Youtube icon" />
                        <img src="/images/mapicon.svg" alt="Map icon" />
                    </div>
                    <div className={styles.connectUsTextItems}>
                        <p>0967802598</p>
                        <p>contact@beex.com</p>
                        <p>BeeX</p>
                        <p>BeeX</p>
                        <p>Ninh Kiều, Cần Thơ</p>
                    </div>
                </div>
            </div>
            <div>
                <div className={styles.linkItemWrapper}>
                <h1 className={styles.linkLabel}>Liên kết</h1>
                </div>
                <div className={styles.linkItems}>
                <a href="">Trang chủ</a>
                <a href="">Về chúng tôi</a>
                <a href="">Dịch vụ</a>
                <a href="">Gói dịch vụ</a>
                <a href="">Điều khoản dịch vụ</a>
                <a href="">Chính sách bảo mật</a>
                </div>
            </div>
        </div>
    )
}

export default Footer
