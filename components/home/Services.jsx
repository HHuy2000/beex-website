import React from 'react'
import styles from "./Services.module.css";

function Services() {
  return (
    <>   
       <div className={styles.allElements} id="Services">
         <div id={styles.title} className = {styles.divtitle} >
            <h1 className={styles.title} >Dịch vụ</h1>
            <p className={styles.imgbg} ></p>
         </div>
         <section className={styles.sectionmain} > 
             <div className={styles.divone}>
                 <h4 className={styles.header}>Thiết kế nhận diện thương hiệu</h4>
                     <ul>
                         <li className={styles.divoneli}><i><img className={styles.imgvector}src="../images/Vector.svg" alt="" /></i>Tư vấn thương hiệu</li>
                         <li  className={styles.divoneli}><i><img className={styles.imgvector}src="../images/Vector.svg" alt="" /></i> Sáng tạo nội dung</li>
                         <li  className={styles.divoneli}><i><img className={styles.imgvector}src="../images/Vector.svg" alt="" /></i>Thiết kế thương hiệu</li>
                         <li  className={styles.divoneli}><i><img className={styles.imgvector}src="../images/Vector.svg" alt="" /></i>Thiết kế bao bì</li>
                     </ul>
                <button className={styles.divonebutton}>Liên hệ</button>
            </div>
            <div className={styles.divtwo}>
                 <img className={styles.imgdivtwo} src="../images/services-img1.svg" alt="" />
             </div>
         </section>
         <section id={styles.sectionreverse} className={styles.sectionmain}>
            <div className={styles.divone}>
                <h4 className={styles.header}>Phát triển phần mềm</h4>
                     <ul>
                         <li className={styles.divoneli}><i><img className={styles.imgvector}src="../images/Vector.svg" alt="" /></i>Xây dựng landing sáng tạo</li>
                         <li  className={styles.divoneli}><i><img className={styles.imgvector}src="../images/Vector.svg" alt="" /></i> Xây dựng website điện tử</li>
                         <li  className={styles.divoneli}><i><img className={styles.imgvector}src="../images/Vector.svg" alt="" /></i>Xây dựng phần mềm quản lí doanh nghiệp CRM, LMS, CMS,...</li>                
                     </ul>
                 <button className={styles.divonebutton}>Liên hệ</button>
             </div>
          <div className={styles.divtwo}>
              <img className={styles.imgdivtwo} src="../images/services-img2.svg" alt="" />
          </div>
         </section>
         <section className={styles.sectionmain}>
             <div className={styles.divone}>
                 <h4 className={styles.header}>Phát triển và quản lí Fanpage</h4>
                     <ul>
                         <li className={styles.divoneli}><i><img className={styles.imgvector}src="../images/Vector.svg" alt="" /></i>Thiết lập, tối ưu hóa fanpage</li>
                         <li  className={styles.divoneli}><i><img className={styles.imgvector}src="../images/Vector.svg" alt="" /></i>Sáng tạo nội dung</li>
                         <li  className={styles.divoneli}><i><img className={styles.imgvector}src="../images/Vector.svg" alt="" /></i>Event / Minigame</li>
                         <li  className={styles.divoneli}><i><img className={styles.imgvector}src="../images/Vector.svg" alt="" /></i>Thiết kế poster</li>
                         <li  className={styles.divoneli}><i><img className={styles.imgvector}src="../images/Vector.svg" alt="" /></i>Thu hút lượt tiếp cận, chạy quảng cáo</li>
                         <li  className={styles.divoneli}><i><img className={styles.imgvector}src="../images/Vector.svg" alt="" /></i>Xây dựng chiến lược quản trị và phát triển fanpage</li>
                         <li  className={styles.divoneli}><i><img className={styles.imgvector}src="../images/Vector.svg" alt="" /></i>Thiết lập Chatbot trả lời tin nhắn tự động</li>
                         <li  className={styles.divoneli}><i><img className={styles.imgvector}src="../images/Vector.svg" alt="" /></i>Trả lời inbox, tư vấn sản phẩm</li>
                     </ul>
                 <button className={styles.divonebutton}>Liên hệ</button>
             </div>
             <div className={styles.divtwo}>
                 <img className={styles.imgdivtwo} src="../images/services-img3.svg" alt="" />
             </div>
         </section>
         <section id={styles.sectionreverse} className={styles.sectionmain} >
             <div className={styles.divone}>
                 <h4 className={styles.header}>Dịch vụ khác</h4>
                     <ul>
                         <li className={styles.divoneli}><i><img className={styles.imgvector}src="../images/Vector.svg" alt="" /></i>Thiết lập doanh nghiệp trên Google Map</li>
                         <li  className={styles.divoneli}><i><img className={styles.imgvector}src="../images/Vector.svg" alt="" /></i>Hỗ trợ đăng ký tên miền</li>
                         <li  className={styles.divoneli}><i><img className={styles.imgvector}src="../images/Vector.svg" alt="" /></i>Dựng, chỉnh sửa video</li>
                         <li  className={styles.divoneli}><i><img className={styles.imgvector}src="../images/Vector.svg" alt="" /></i>Chỉnh sửa ảnh, blend màu, hậu kì,..</li>
                         <li  className={styles.divoneli}><i><img className={styles.imgvector}src="../images/Vector.svg" alt="" /></i>Chụp ảnh sản phẩm</li>
                     </ul>
                 <button className={styles.divonebutton}>Liên hệ</button>
             </div>
             <div className={styles.divtwo}>
                 <img className={styles.imgdivtwo} src="../images/services-img4.svg" alt="" />
             </div>
         </section>
        </div>
    </>
 )
}


export default Services;
