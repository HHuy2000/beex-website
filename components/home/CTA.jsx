import React from 'react'
import styles from './CTA.module.css'

function CTA() {
    return (
        <div className={styles.CTABackground}>
            <img src="/images/CTAicon.svg" alt="CTA icon" className={styles.CTAIcon}/>
            <div className={styles.CTA}>
                <h1 className={styles.CTAH1}>Bạn đã sẵn sàng?</h1>
                <p className={styles.CTAP}>Trãi nghiệm ngay tất cả các dịch vụ tối ưu và tiết kiệm nhất cho doanh nghiệp của bạn được cung cấp từ BeeX chúng tôi</p>
                <div className={styles.CTAButtons}>
                <button className={styles.CTAContactButton}>Liên hệ ngay</button>
                <button className={styles.CTADetailButton}>Xem bảng chi tiết nhiệm vụ</button>
                </div>
            </div>
        </div>
    )
}

export default CTA
