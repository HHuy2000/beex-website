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
                    <p>BeeX liên tục hoàn thiện dịch vụ khách hàng.</p>
                    <p>Chúng tôi muốn bạn cảm nhận được thành ý từ đội ngũ.</p>
                    <p>Vì thế, chúng tôi sẵn sàng tư vấn miễn phí nếu bạn có bất kì thắc mắc về dịch vụ mà chúng tôi cung cấp.</p>
                </div>

                <div>
                    <p>This is an image</p>
                </div>
            </div>
        </>
    )
}

export default Advisory
