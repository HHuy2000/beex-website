import React from 'react'
import styles from "./Advisory.module.css";

function Advisory() {
    return (
        <>
            <div className = {styles.AdvisoryGroup}> {/*Tất cả nội dung của Mực*/}

                {/* YCTV
                    Content
                    Textfield
                        Tên - SĐT
                        Email - Cty
                    Textarea
                    Footer:
                        btn - hotline*/}
                <div>  
                    <h1>Yêu cầu tư vấn</h1>
                    {/* {<div className = {styles.AdvisoryBackground}>
                        <img src="/images/Adv_backgroundBottom.svg" alt="BackgroundTop"/>
                        <img src="/images/Adv_backgroundTop.svg" alt="BackgroundTop"/>
                    </div>} */}
                    <div className = {styles.AdvisoryContent}>
                    <p>BeeX liên tục hoàn thiện dịch vụ khách hàng.</p>
                    <p>Chúng tôi muốn bạn cảm nhận được thành ý từ đội ngũ.</p>
                    <p>Vì thế, chúng tôi sẵn sàng tư vấn miễn phí nếu bạn có bất kì thắc mắc về dịch vụ mà chúng tôi cung cấp.</p>
                    </div>
        
                    <div className = {styles.AdvisoryTextFieldGroup}>
                        <div className = {styles.AdvisoryTextField}>
                            <p>Tên của bạn*</p>
                            <input type="text" id="firstname" name="firstname"/><br/>
                        </div>
                        <div className = {styles.AdvisoryTextField}>
                            <p>Số điện thoại*</p>
                            <input type="text" id="firstname" name="firstname"/><br/>
                        </div>
                        <div className = {styles.AdvisoryTextField}>
                            <p>Email*</p>
                            <input type="text" id="firstname" name="firstname"/><br/>
                        </div>
                        <div className = {styles.AdvisoryTextField}>
                            <p>Công ty</p>
                            <input type="text" id="firstname" name="firstname"/><br/>
                        </div>
                    </div>

                    <div className = {styles.AdvisoryTextArea}>
                        <div>Mô tả yêu cầu</div>
                        <textarea rows="9" cols="70"></textarea>  
                    </div>

                    <div className = {styles.AdvisoryFooter}>
                        <div>
                            <button name="button" type="button" className = {styles.AdvisoryButton}>Gửi yêu cầu</button>
                        </div>
                        <div >
                            Hotline: 0327846162
                        </div>
                    </div>
                </div>

                <div>
                    <p>This is an image</p>
                </div>
            </div>
        </>
    )
}

export default Advisory
