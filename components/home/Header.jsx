import React from 'react'
import styles from "./Header.module.css";

function Header() {
    return (
        <div className={styles.div}>
            <div className={styles.text}>
                <div className={styles.quotehighdaddy}>           
                 <p className={styles.quotehigh}>CÙNG BEEX ĐƯA BẠN ĐẾN CÂU CHUYỆN</p>
                </div>
                <div className={styles.allh1}>
                <h1 className={styles.h1}>Những chú ong <span className={styles.span}>chăm chỉ</span></h1>
                 <h1 className={styles.h1}>Cùng bạn xây <span className={styles.span}>thương hiệu</span></h1>
                </div>
                <p className={styles.quotelow}><span className={styles.span}>BeeX</span> là nơi tuyệt vời để bắt đầu hiện thực hoá ý tưởng kinh doanh của bạn. Với những chiến dịch giúp gia tăng doanh số bán hàng từ đó hướng đến sự thành công của doanh nghiệp bạn</p>
                <button className={styles.btn}>Liên hệ</button>
            </div>
            <div className={styles.pic}>
            <img src="\images\Header_pic.svg" alt="Dead" className={styles.png} />
            </div>
        </div>
    )
}

export default Header
