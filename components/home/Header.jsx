import React from 'react'
import styles from "./Header.module.css";

function Header() {
    return (
        <div className={styles.div}>
            <div className={styles.text}>
            <p>CÙNG BEEX ĐƯA BẠN ĐẾN CÂU CHUYỆN</p>
            <h1 className={styles.h1}>Những chú ong chăm chỉ</h1>
            <h1 className={styles.h1}>Cùng bạn xây thương hiệu</h1>
            <p className={styles.quotelow}>BeeX là nơi tuyệt vời để bắt đầu hiện thực hoá ý tưởng kinh doanh của bạn. Với những chiến dịch giúp gia tăng doanh số bán hàng từ đó hướng đến sự thành công của doanh nghiệp bạn</p>
            <button>Liên hệ</button>
            </div>
            <div className={styles.pic}>
            <img src="\images\Ded Inside.png" alt="Dead" className={styles.png} />
            </div>
        </div>
    )
}

export default Header
