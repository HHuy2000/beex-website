import React, { Component } from 'react';
import AssCrack from "./testimonials.module.css";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader



export default class Testimonial extends React.Component {
    render() {


        return (

            <div className={AssCrack.testimonial_chunk}>
                <div className={AssCrack.testimonial_top}>
                    <div className={AssCrack.logo}>
                        <img src="/images/testimonials-logo.svg"></img>
                    </div>
                    <div className={AssCrack.testimonial_title}>
                        <h1>Chia sẻ</h1>
                    </div>
                </div>
                <div className={AssCrack.testimonial_block}>
                    {/* <button className={AssCrack.previous_btn}><img src="/images/testimonial-left.svg"></img></button> */}
                    {/* <div className={AssCrack.previous_btn}>
                        <img src="/images/testimonial-left.svg" onClick={this.prev} alt="right arrow"></img>
                    </div> */}
                    {/* <ScrollMenu
                        data={ */}
                    <Carousel
                        showArrows={true}
                        centerMode={true}
                        centerSlidePercentage={33.33}
                        infiniteLoop={true}
                        showIndicators={false}
                        showThumbs={false}
                        showStatus={false}
                        width={1240}
                        renderArrowPrev={(onClickHandler, hasNext, label) =>
                            hasNext && (
                                <button type="button" className={AssCrack.previous_btn} onClick={onClickHandler} title={label}>
                                    <img src="/images/testimonial-left.svg"></img>
                                </button>
                            )
                        }
                        renderArrowNext={(onClickHandler, hasNext, label) =>
                            hasNext && (
                                <button type="button" className={AssCrack.next_btn} onClick={onClickHandler} title={label}>
                                    <img src="/images/testimonial-right.svg"></img>
                                </button>
                            )
                        }
                    >
                        <div className={AssCrack.userblock}>
                            <div className={AssCrack.profile}>
                                <img src="/images/testimonials-user1.svg" alt="img1" className={AssCrack.usr_img}></img>
                                <div className={AssCrack.usr_block}>
                                    <h2>Trần Huy Quyền</h2>
                                    <p>CLB Doanh nhân 2030</p>
                                </div>
                            </div>
                            <div className={AssCrack.comment}>
                                <p>Tôi luôn đánh giá cao chất lượng sản phẩm, dịch vụ của BeeX Nổi bật nhất là nhân viên tư vấn rất chuyên nghiệp và tận tâm. Chúc BeeX luôn thành công.</p>
                            </div>
                        </div>
                        <div className={AssCrack.userblock}>
                            <div className={AssCrack.profile}>
                                <img src="/images/testimonials-user2.svg" alt="img2" className={AssCrack.usr_img}></img>
                                <div className={AssCrack.usr_block}>
                                    <h2>Lê Hồng Châu</h2>
                                    <p>Công ty Cổ phần Nova F&B</p>
                                </div>
                            </div>
                            <div className={AssCrack.comment}>
                                <p>Các bạn nhân viên hỗ trợ rất nhiệt tình, xử lý thông tin và phản hồi rất nhanh. Mình khá là hài lòng với dịch vụ của bên BeeX. Hiện tại bên mình dùng rất nhiều dịch vụ tại BeeX.</p>
                            </div>
                        </div>
                        <div className={AssCrack.userblock}>
                            <div className={AssCrack.profile}>
                                <img src="/images/testimonials-user3.svg" alt="img3" className={AssCrack.usr_img}></img>
                                <div className={AssCrack.usr_block}>
                                    <h2>Nguyễn Trung Thành</h2>
                                    <p>Công ty TNHH TMDV Gia dụng Gold Fit</p>
                                </div>
                            </div>
                            <div className={AssCrack.comment}>
                                <p>Dịch vụ BeeX đã khiến cho doanh nghiệp GOLD FIT của tôi chuyên nghiệp hơn rất nhiều, sự hỗ trợ của BeeX là rất chuyên nghiệp, nhân viên lại dễ thương và đáng yêu. Tôi thích BeeX.</p>
                            </div>
                        </div>
                        <div className={AssCrack.userblock}>
                            <div className={AssCrack.profile}>
                                <img src="/images/testimonials-user1.svg" alt="img1" className={AssCrack.usr_img}></img>
                                <div className={AssCrack.usr_block}>
                                    <h2>Trần Huy Quyền</h2>
                                    <p>CLB Doanh nhân 2030</p>
                                </div>
                            </div>
                            <div className={AssCrack.comment}>
                                <p>Tôi luôn đánh giá cao chất lượng sản phẩm, dịch vụ của BeeX Nổi bật nhất là nhân viên tư vấn rất chuyên nghiệp và tận tâm. Chúc BeeX luôn thành công.</p>
                            </div>
                        </div>
                        <div className={AssCrack.userblock}>
                            <div className={AssCrack.profile}>
                                <img src="/images/testimonials-user2.svg" alt="img2" className={AssCrack.usr_img}></img>
                                <div className={AssCrack.usr_block}>
                                    <h2>Lê Hồng Châu</h2>
                                    <p>Công ty Cổ phần Nova F&B</p>
                                </div>
                            </div>
                            <div className={AssCrack.comment}>
                                <p>Các bạn nhân viên hỗ trợ rất nhiệt tình, xử lý thông tin và phản hồi rất nhanh. Mình khá là hài lòng với dịch vụ của bên BeeX. Hiện tại bên mình dùng rất nhiều dịch vụ tại BeeX.</p>
                            </div>
                        </div>
                        <div className={AssCrack.userblock}>
                            <div className={AssCrack.profile}>
                                <img src="/images/testimonials-user3.svg" alt="img3" className={AssCrack.usr_img}></img>
                                <div className={AssCrack.usr_block}>
                                    <h2>Nguyễn Trung Thành</h2>
                                    <p>Công ty TNHH TMDV Gia dụng Gold Fit</p>
                                </div>
                            </div>
                            <div className={AssCrack.comment}>
                                <p>Dịch vụ BeeX đã khiến cho doanh nghiệp GOLD FIT của tôi chuyên nghiệp hơn rất nhiều, sự hỗ trợ của BeeX là rất chuyên nghiệp, nhân viên lại dễ thương và đáng yêu. Tôi thích BeeX.</p>
                            </div>
                        </div>
                        <div className={AssCrack.userblock}>
                            <div className={AssCrack.profile}>
                                <img src="/images/testimonials-user1.svg" alt="img1" className={AssCrack.usr_img}></img>
                                <div className={AssCrack.usr_block}>
                                    <h2>Trần Huy Quyền</h2>
                                    <p>CLB Doanh nhân 2030</p>
                                </div>
                            </div>
                            <div className={AssCrack.comment}>
                                <p>Tôi luôn đánh giá cao chất lượng sản phẩm, dịch vụ của BeeX Nổi bật nhất là nhân viên tư vấn rất chuyên nghiệp và tận tâm. Chúc BeeX luôn thành công.</p>
                            </div>
                        </div>
                        <div className={AssCrack.userblock}>
                            <div className={AssCrack.profile}>
                                <img src="/images/testimonials-user2.svg" alt="img2" className={AssCrack.usr_img}></img>
                                <div className={AssCrack.usr_block}>
                                    <h2>Lê Hồng Châu</h2>
                                    <p>Công ty Cổ phần Nova F&B</p>
                                </div>
                            </div>
                            <div className={AssCrack.comment}>
                                <p>Các bạn nhân viên hỗ trợ rất nhiệt tình, xử lý thông tin và phản hồi rất nhanh. Mình khá là hài lòng với dịch vụ của bên BeeX. Hiện tại bên mình dùng rất nhiều dịch vụ tại BeeX.</p>
                            </div>
                        </div>
                        <div className={AssCrack.userblock}>
                            <div className={AssCrack.profile}>
                                <img src="/images/testimonials-user3.svg" alt="img3" className={AssCrack.usr_img}></img>
                                <div className={AssCrack.usr_block}>
                                    <h2>Nguyễn Trung Thành</h2>
                                    <p>Công ty TNHH TMDV Gia dụng Gold Fit</p>
                                </div>
                            </div>
                            <div className={AssCrack.comment}>
                                <p>Dịch vụ BeeX đã khiến cho doanh nghiệp GOLD FIT của tôi chuyên nghiệp hơn rất nhiều, sự hỗ trợ của BeeX là rất chuyên nghiệp, nhân viên lại dễ thương và đáng yêu. Tôi thích BeeX.</p>
                            </div>
                        </div>
                        <div className={AssCrack.userblock}>
                            <div className={AssCrack.profile}>
                                <img src="/images/testimonials-user1.svg" alt="img1" className={AssCrack.usr_img}></img>
                                <div className={AssCrack.usr_block}>
                                    <h2>Trần Huy Quyền</h2>
                                    <p>CLB Doanh nhân 2030</p>
                                </div>
                            </div>
                            <div className={AssCrack.comment}>
                                <p>Tôi luôn đánh giá cao chất lượng sản phẩm, dịch vụ của BeeX Nổi bật nhất là nhân viên tư vấn rất chuyên nghiệp và tận tâm. Chúc BeeX luôn thành công.</p>
                            </div>
                        </div>
                        <div className={AssCrack.userblock}>
                            <div className={AssCrack.profile}>
                                <img src="/images/testimonials-user2.svg" alt="img2" className={AssCrack.usr_img}></img>
                                <div className={AssCrack.usr_block}>
                                    <h2>Lê Hồng Châu</h2>
                                    <p>Công ty Cổ phần Nova F&B</p>
                                </div>
                            </div>
                            <div className={AssCrack.comment}>
                                <p>Các bạn nhân viên hỗ trợ rất nhiệt tình, xử lý thông tin và phản hồi rất nhanh. Mình khá là hài lòng với dịch vụ của bên BeeX. Hiện tại bên mình dùng rất nhiều dịch vụ tại BeeX.</p>
                            </div>
                        </div>
                        <div className={AssCrack.userblock}>
                            <div className={AssCrack.profile}>
                                <img src="/images/testimonials-user3.svg" alt="img3" className={AssCrack.usr_img}></img>
                                <div className={AssCrack.usr_block}>
                                    <h2>Nguyễn Trung Thành</h2>
                                    <p>Công ty TNHH TMDV Gia dụng Gold Fit</p>
                                </div>
                            </div>
                            <div className={AssCrack.comment}>
                                <p>Dịch vụ BeeX đã khiến cho doanh nghiệp GOLD FIT của tôi chuyên nghiệp hơn rất nhiều, sự hỗ trợ của BeeX là rất chuyên nghiệp, nhân viên lại dễ thương và đáng yêu. Tôi thích BeeX.</p>
                            </div>
                        </div>
                    </Carousel>
                    {/* }
                        arrowLeft={ArrowLeft}
                        arrowRight={ArrowRight}
                        selected={selected}
                        onSelect={this.onSelect}
                    /> */}
                    {/* <div className={AssCrack.next_btn}>
                        <img src="/images/testimonial-right.svg" onClick={this.next} alt="left arrow"></img>
                    </div> */}
                    {/* <button className={AssCrack.next_btn}><img src="/images/testimonial-right.svg"></img></button> */}
                </div>
            </div>
        )
    }
}

// ReactDOM.render(<Testimonial />, document.querySelector('.demo-carousel'));

