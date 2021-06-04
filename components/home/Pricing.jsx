import React from 'react'
import styles from "./Pricing.module.css";

function Pricing() {
    return (
       <> 
       {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
       <section className={styles.btn}>
            <span className={styles.btnback}>
            <i class="fas fa-chevron-circle-left"></i>
            </span>
            <span className={styles.btnnext}>
            <i class="fas fa-chevron-circle-right"></i>
            </span>
       </section> */}
       <div className={styles.pricingallElements}>  
           <section className = {styles.sectionTitle}>
               <div className={styles.title}>
                   <h1>Gói dịch vụ</h1>
               </div>
               <div className={styles.logoTitle}>
                 <img class="logo" src="../images/pricingTitle.svg" alt="" />
               </div>
           </section>
           <section className= {styles.sectionbody}>
               <div className={styles.divbody}>
                   <h1>Trứng</h1>
                   <button><b>2tr499k</b>/tháng</button>
                   <ul>
                         <li className={styles.divoneli}><i><img className={styles.imgvector}src="../images/Vector.svg" alt="" /></i><b>1</b> Thiết kế logo</li>
                         <li  className={styles.divoneli}><i><img className={styles.imgvector}src="../images/Vector.svg" alt="" /></i><b>1</b> Thiết kế ảnh bìa</li>
                         <li  className={styles.divoneli}><i><img className={styles.imgvector}src="../images/Vector.svg" alt="" /></i><b>4</b> bài sáng tạo nội dung</li>
                         <li  className={styles.divoneli}><i><img className={styles.imgvector}src="../images/Vector.svg" alt="" /></i><b>4</b> thiết kế poster</li>
                         <li  className={styles.divoneli}><i><img className={styles.imgvector}src="../images/Vector.svg" alt="" /></i>Thiết lập, tối ưu hoá fanpage</li>
                         <li  className={styles.divoneli}><i><img className={styles.imgvector}src="../images/Vector.svg" alt="" /></i>Thiết lập Chatbot trả lời tự động</li>
                         <a href="">Mua ngay<img className={styles.Footerimg} src="../images/pricingFooterdiv.svg"></img></a>
                    </ul>
               </div>
               <div className={styles.divbody} id={styles.divorange}>
                   <h1>Ấu trùng</h1>
                   <button><b>2tr499k</b>/tháng</button>
                   <ul>
                         <li className={styles.divoneli}><i><img className={styles.imgvector}src="../images/pricingTickwhite.svg" alt="" /></i><b>1</b> Thiết kế logo</li>
                         <li  className={styles.divoneli}><i><img className={styles.imgvector}src="../images/pricingTickwhite.svg" alt="" /></i><b>1</b> Thiết kế ảnh bìa</li>
                         <li  className={styles.divoneli}><i><img className={styles.imgvector}src="../images/pricingTickwhite.svg" alt="" /></i><b>1</b> Event/Minigame</li>
                         <li  className={styles.divoneli}><i><img className={styles.imgvector}src="../images/pricingTickwhite.svg" alt="" /></i><b>8</b> bài sáng tạo nội dung</li>
                         <li  className={styles.divoneli}><i><img className={styles.imgvector}src="../images/pricingTickwhite.svg" alt="" /></i><b>9</b> thiết kế poster</li>
                         <li  className={styles.divoneli}><i><img className={styles.imgvector}src="../images/pricingTickwhite.svg" alt="" /></i>Thiết lập Chatbot trả lời tự động</li>
                         <li  className={styles.divoneli}><i><img className={styles.imgvector}src="../images/pricingTickwhite.svg" alt="" /></i>Thiết lập, tối ưu hoá fanpage</li>
                         <li  className={styles.divoneli}><i><img className={styles.imgvector}src="../images/pricingTickwhite.svg" alt="" /></i>Thiết lập Chatbot trả lời tự động</li>
                         <img className={styles.img} src="../images/pricingImgdivorange.svg" alt="" />
                         <a id={styles.aOrange} href="">Mua ngay<img className={styles.Footerimg} src="../images/pricingFooterdiv.svg"></img></a>
                    </ul>
               </div>
               <div className={styles.divbody}>
                   <h1>Ong non</h1>
                   <button><b>9tr999k</b>/tháng</button>
                   <ul>
                         <li className={styles.divoneli}><i><img className={styles.imgvector}src="../images/Vector.svg" alt="" /></i><b>1</b> Thiết kế logo</li>
                         <li  className={styles.divoneli}><i><img className={styles.imgvector}src="../images/Vector.svg" alt="" /></i><b>1</b> Thiết kế ảnh bìa</li>
                         <li  className={styles.divoneli}><i><img className={styles.imgvector}src="../images/Vector.svg" alt="" /></i><b>12</b> bài sáng tạo nội dung</li>
                         <li  className={styles.divoneli}><i><img className={styles.imgvector}src="../images/Vector.svg" alt="" /></i><b>2</b> Event/Minigame</li>
                         <li  className={styles.divoneli}><i><img className={styles.imgvector}src="../images/Vector.svg" alt="" /></i><b>14</b> thiết kế poster</li>
                         <li  className={styles.divoneli}><i><img className={styles.imgvector}src="../images/Vector.svg" alt="" /></i>Thiết lập, tối ưu hoá fanpag</li>
                         <li  className={styles.divoneli}><i><img className={styles.imgvector}src="../images/Vector.svg" alt="" /></i>Thiết lập Chatbot trả lời tự động</li>
                         <li  className={styles.divoneli}><i><img className={styles.imgvector}src="../images/Vector.svg" alt="" /></i>Thiết lập doanh nghiệp trên Google Map</li>
                         <a href="">Mua ngay<img className={styles.Footerimg} src="../images/pricingFooterdiv.svg"></img></a>
                    </ul>
               </div>
               <div className={styles.divbody}>
                  <h1>Ong trưởng thành</h1>
                  <button><b>14tr999k</b>/tháng</button>
                  <ul>
                         <li className={styles.divoneli}><i><img className={styles.imgvector}src="../images/Vector.svg" alt="" /></i><b>1</b> Thiết kế logo</li>
                         <li  className={styles.divoneli}><i><img className={styles.imgvector}src="../images/Vector.svg" alt="" /></i><b>1</b> Thiết kế ảnh bìa</li>
                         <li  className={styles.divoneli}><i><img className={styles.imgvector}src="../images/Vector.svg" alt="" /></i><b>16</b> bài sáng tạo nội dung</li>
                         <li  className={styles.divoneli}><i><img className={styles.imgvector}src="../images/Vector.svg" alt="" /></i><b>4</b> Event/Minigame</li>
                         <li  className={styles.divoneli}><i><img className={styles.imgvector}src="../images/Vector.svg" alt="" /></i><b>20</b> thiết kế poster</li>
                         <li  className={styles.divoneli}><i><img className={styles.imgvector}src="../images/Vector.svg" alt="" /></i>Thiết lập, tối ưu hoá fanpage</li>
                         <li  className={styles.divoneli}><i><img className={styles.imgvector}src="../images/Vector.svg" alt="" /></i>Thiết lập Chatbot trả lời tự động</li>
                         <li  className={styles.divoneli}><i><img className={styles.imgvector}src="../images/Vector.svg" alt="" /></i>Thiết lập doanh nghiệp trên Google Map</li>
                         <li  className={styles.divoneli}><i><img className={styles.imgvector}src="../images/Vector.svg" alt="" /></i>Thu hút lượt tiếp cận, chạy ads</li>
                         <li  className={styles.divoneli}><i><img className={styles.imgvector}src="../images/Vector.svg" alt="" /></i>Xây dựng chiến lược quản trị và phát triển fanpag</li>
                         <li  className={styles.divoneli}><i><img className={styles.imgvector}src="../images/Vector.svg" alt="" /></i>Thiết lập Chatbot trả lời tin nhắn tự động</li>
                         <li  className={styles.divoneli}><i><img className={styles.imgvector}src="../images/Vector.svg" alt="" /></i>Trả lời inbox, tư vấn sản phẩm</li>
                         <li  className={styles.divoneli}><i><img className={styles.imgvector}src="../images/Vector.svg" alt="" /></i>Xây dựng landing page</li>
                         <a href="">Mua ngay<img className={styles.Footerimg} src="../images/pricingFooterdiv.svg"></img></a>
                    </ul>
               </div>
               <div className={styles.divbody}>
                  <h1>Ong chúa</h1>
                  <button><b>29tr999</b>/tháng</button>
                  <ul>
                  <li className={styles.divoneli}><i><img className={styles.imgvector}src="../images/Vector.svg" alt="" /></i><b>1</b> Thiết kế logo</li>
                         <li  className={styles.divoneli}><i><img className={styles.imgvector}src="../images/Vector.svg" alt="" /></i><b>1</b> Thiết kế ảnh bìa</li>
                         <li  className={styles.divoneli}><i><img className={styles.imgvector}src="../images/Vector.svg" alt="" /></i><b>20</b> bài sáng tạo nội dung</li>
                         <li  className={styles.divoneli}><i><img className={styles.imgvector}src="../images/Vector.svg" alt="" /></i><b>4-8</b> Event/Minigame</li>
                         <li  className={styles.divoneli}><i><img className={styles.imgvector}src="../images/Vector.svg" alt="" /></i><b>28</b> thiết kế poster</li>
                         <li  className={styles.divoneli}><i><img className={styles.imgvector}src="../images/Vector.svg" alt="" /></i>Thiết lập, tối ưu hoá fanpage</li>
                         <li  className={styles.divoneli}><i><img className={styles.imgvector}src="../images/Vector.svg" alt="" /></i>Thiết lập Chatbot trả lời tự động</li>
                         <li  className={styles.divoneli}><i><img className={styles.imgvector}src="../images/Vector.svg" alt="" /></i>Thiết lập doanh nghiệp trên Google Map</li>
                         <li  className={styles.divoneli}><i><img className={styles.imgvector}src="../images/Vector.svg" alt="" /></i>Thu hút lượt tiếp cận, chạy ads</li>
                         <li  className={styles.divoneli}><i><img className={styles.imgvector}src="../images/Vector.svg" alt="" /></i>Xây dựng chiến lược quản trị và phát triển fanpag</li>
                         <li  className={styles.divoneli}><i><img className={styles.imgvector}src="../images/Vector.svg" alt="" /></i>Thiết lập Chatbot trả lời tin nhắn tự động</li>
                         <li  className={styles.divoneli}><i><img className={styles.imgvector}src="../images/Vector.svg" alt="" /></i>Trả lời inbox, tư vấn sản phẩm</li>
                         <li  className={styles.divoneli}><i><img className={styles.imgvector}src="../images/Vector.svg" alt="" /></i>Xây dựng landing page</li>
                         <a href="">Mua ngay<img className={styles.Footerimg} src="../images/pricingFooterdiv.svg"></img></a>
                    </ul>
               </div>
           </section>
           <p className={styles.footerbody}>Doanh nghiệp bạn đã được vận hành 1 thời gian? <a className={styles.footerbody} href=""> Tư vấn gói chuyên biệt</a></p>
        </div>

    </>
    )
}

export default Pricing
