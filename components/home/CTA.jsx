import React from 'react'
import styles from './CTA.module.css'
import Advisory from "../home/Advisory";
import Pricing from "../home/Pricing";

function CTA() {
    return (
        <div className={styles.CTABackground}>
            <img src="/images/CTAicon.svg" alt="CTA icon" className={styles.CTAIcon}/>
            <div className={styles.CTA}>
                <h1 className={styles.CTAH1}>Bạn đã sẵn sàng?</h1>
                <p className={styles.CTAP}>Trãi nghiệm ngay tất cả các dịch vụ tối ưu và tiết kiệm nhất cho doanh nghiệp của bạn được cung cấp từ BeeX chúng tôi</p>
                <div className={styles.CTAButtons}>
                <a href="#Advisory" className={styles.CTAContactButton} >Liên hệ ngay</a>
                <a href="#Pricing" className={styles.CTADetailButton}>Xem bảng chi tiết nhiệm vụ</a>
                </div>
            </div>
        </div>
    )
}

export default CTA
