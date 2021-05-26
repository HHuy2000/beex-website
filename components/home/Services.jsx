import React from "react";
import ServiceItem from "./ServiceItem";

function Services() {
  return (
    <>
        <div class="div-title">
        <h1 class="title">Dịch vụ</h1>
        <p class="img-bg"></p>
        </div>
      <section class="section-main section-one">
          <div class="div-one">
              <h4 class="header">Thiết kế nhận diện thương hiệu</h4>
              <ul>
                  <li class="div-one-li"><i><img class="img-vector"src="../images/Vector.svg" alt="" /></i>Tư vấn thương hiệu</li>
                  <li  class="div-one-li"><i><img class="img-vector"src="../images/Vector.svg" alt="" /></i> Sáng tạo nội dung</li>
                  <li  class="div-one-li"><i><img class="img-vector"src="../images/Vector.svg" alt="" /></i>Thiết kế thương hiệu</li>
                  <li  class="div-one-li"><i><img class="img-vector"src="../images/Vector.svg" alt="" /></i>Thiết kế bao bì</li>
              </ul>
              <button class="div-one-button">Liên hệ</button>
          </div>
          <div class="div-two">
              <img class="img-div-two" src="../images/services-img1.svg" alt="" />
          </div>
      </section>
      <section id="section-two" class="section-main section-two">
          <div class="div-one">
              <h4 class="header">Phát triển phần mềm</h4>
              <ul>
                  <li class="div-one-li"><i><img class="img-vector"src="../images/Vector.svg" alt="" /></i>Xây dựng landing sáng tạo</li>
                  <li  class="div-one-li"><i><img class="img-vector"src="../images/Vector.svg" alt="" /></i> Xây dựng website điện tử</li>
                  <li  class="div-one-li"><i><img class="img-vector"src="../images/Vector.svg" alt="" /></i>Xây dựng phần mềm quản lí doanh nghiệp CRM, LMS, CMS,...</li>                
              </ul>
              <button class="div-one-button">Liên hệ</button>
          </div>
          <div class="div-two">
              <img class="img-div-two" src="../images/services-img2.svg" alt="" />
          </div>
      </section>
      <section class="section-main section-one">
          <div class="div-one">
              <h4 class="header">Phát triển và quản lí Fanpage</h4>
              <ul>
                  <li class="div-one-li"><i><img class="img-vector"src="../images/Vector.svg" alt="" /></i>Thiết lập, tối ưu hóa fanpage</li>
                  <li  class="div-one-li"><i><img class="img-vector"src="../images/Vector.svg" alt="" /></i>Sáng tạo nội dung</li>
                  <li  class="div-one-li"><i><img class="img-vector"src="../images/Vector.svg" alt="" /></i>Event / Minigame</li>
                  <li  class="div-one-li"><i><img class="img-vector"src="../images/Vector.svg" alt="" /></i>Thiết kế poster</li>
                  <li  class="div-one-li"><i><img class="img-vector"src="../images/Vector.svg" alt="" /></i>Thu hút lượt tiếp cận, chạy quảng cáo</li>
                  <li  class="div-one-li"><i><img class="img-vector"src="../images/Vector.svg" alt="" /></i>Xây dựng chiến lược quản trị và phát triển fanpage</li>
                  <li  class="div-one-li"><i><img class="img-vector"src="../images/Vector.svg" alt="" /></i>Thiết lập Chatbot trả lời tin nhắn tự động</li>
                  <li  class="div-one-li"><i><img class="img-vector"src="../images/Vector.svg" alt="" /></i>Trả lời inbox, tư vấn sản phẩm</li>
              </ul>
              <button class="div-one-button">Liên hệ</button>
          </div>
          <div class="div-two">
              <img class="img-div-two" src="../images/services-img3.svg" alt="" />
          </div>
      </section>
      <section id="section-two" class="section-main section-two">
          <div class="div-one">
              <h4 class="header">Dịch vụ khác</h4>
              <ul>
                  <li class="div-one-li"><i><img class="img-vector"src="../images/Vector.svg" alt="" /></i>Thiết lập doanh nghiệp trên Google Map</li>
                  <li  class="div-one-li"><i><img class="img-vector"src="../images/Vector.svg" alt="" /></i>Hỗ trợ đăng ký tên miền</li>
                  <li  class="div-one-li"><i><img class="img-vector"src="../images/Vector.svg" alt="" /></i>Dựng, chỉnh sửa video</li>
                  <li  class="div-one-li"><i><img class="img-vector"src="../images/Vector.svg" alt="" /></i>Chỉnh sửa ảnh, blend màu, hậu kì,..</li>
                  <li  class="div-one-li"><i><img class="img-vector"src="../images/Vector.svg" alt="" /></i>Chụp ảnh sản phẩm</li>
              </ul>
              <button class="div-one-button">Liên hệ</button>
          </div>
          <div class="div-two">
              <img class="img-div-two" src="../images/services-img4.svg" alt="" />
          </div>
      </section>
      
      </>

  );
}

export default Services;
