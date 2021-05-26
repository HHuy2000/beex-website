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

                    <div className = {styles.AdvisoryContent}>
                    <p>BeeX liên tục hoàn thiện dịch vụ khách hàng.</p>
                    <p>Chúng tôi muốn bạn cảm nhận được thành ý từ đội ngũ.</p>
                    <p>Vì thế, chúng tôi sẵn sàng tư vấn miễn phí nếu bạn có bất kì thắc mắc về dịch vụ mà chúng tôi cung cấp.</p>
                    </div>
        
                    <div className = {styles.AdvisoryTextField}>
                        <div>item 1</div>
                        <div>item 2</div>
                        <div>item 3</div>
                        <div>item 4</div>
                    </div>

                    <div className = {styles.AdvisoryTextArea}>
                        <div>Mô tả yêu cầu</div>
                    </div>

                    <div className = {styles.AdvisoryFooter}>

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
