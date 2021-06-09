import React from 'react'
import styles from "./Advisory.module.css";

function Advisory() {
    return (
        <>
                <div className = {styles.AdvisoryGroup}> {/*Tất cả nội dung của Mực*/}
                <div className = {styles.AdvisoryLeftContent}>
                    <h1 className = {styles.AdvisoryHeader}>Yêu cầu tư vấn </h1>
                    <div className = {styles.AdvisoryContent}>
                    <p>BeeX liên tục hoàn thiện dịch vụ khách hàng. Chúng tôi muốn bạn cảm nhận được thành ý từ đội ngũ. Vì thế, chúng tôi sẵn sàng tư vấn miễn phí nếu bạn có bất kì thắc mắc về dịch vụ mà chúng tôi cung cấp.</p>
                    </div>
                    <form>
                        <div className = {styles.AdvisoryTextFieldGroup}>
                        <div>
                            <p>Tên của bạn*</p>
                            <input className = {styles.AdvisoryTextField} type="text" id="name" name="name" autoComplete="off"/><br/>
                        </div>
                        <div>
                            <p>Số điện thoại*</p>
                            <input className = {styles.AdvisoryTextField} type="text" id="phoneNumber" name="phoneNumber" autoComplete="off"/><br/>
                        </div>
                        <div>
                            <p>Email*</p>
                            <input className = {styles.AdvisoryTextField} type="text" id="email" name="email" autoComplete="off"/><br/>
                        </div>
                        <div>
                            <p>Công ty</p>
                            <input className = {styles.AdvisoryTextField} type="text" id="company" name="company" autoComplete="off"/><br/>
                        </div>
                        </div>
                    </form>
                    <div>
                        <div>
                        <div className = {styles.AdvisoryDes}><br/><br/>Mô tả yêu cầu</div>
                        <textarea className = {styles.AdvisoryTextArea} rows="9" cols="70"></textarea>  
                        </div>

                        <div className = {styles.AdvisoryFooter}>
                            <div>
                            <button name="button" type="button" className = {styles.AdvisoryButton}>Gửi yêu cầu</button>
                            </div>
                            <div className = {styles.AdvisoryHotline}>
                            Hotline: 0327846162
                            </div>
                        </div>
                    </div>
                </div>
                <div className = {styles.AdvisoryMainImageGroup}>
                    <img className = {styles.AdvisoryMainImage} src="images/Bee_AdvImage.svg" alt="BigBee" />
                </div>
            </div>
        </>
    )
}

export default Advisory
