import React from 'react'
import styles from "./Header.module.css";

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.headerTextWrapper}>         
                <p className={styles.headerTopP}>CÙNG BEEX ĐƯA BẠN ĐẾN CÂU CHUYỆN</p>
                <div className={styles.headerH1Wrapper}>
                    <h1 className={styles.headerH1}>Những chú ong <span className={styles.span}>chăm chỉ</span><br />Cùng bạn xây <span className={styles.span}>thương hiệu</span></h1>
                </div>
                <div className={styles.headerBottomPWrapper}>
                    <p className={styles.headerBottomP}><span className={styles.span}>BeeX</span> là nơi tuyệt vời để bắt đầu hiện thực hoá ý tưởng kinh doanh của bạn. Với những chiến dịch giúp gia tăng doanh số bán hàng từ đó hướng đến sự thành công của doanh nghiệp bạn</p>
                </div>
                <button className={styles.headerButton}>Liên hệ</button>
            </div>
            <div className={styles.headerImage}>
            <img src="\images\Header_pic.svg" alt="Picture header" className={styles.headerpng} />
            </div>
        </div>
    )
}

export default Header
