import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import hello from './OurProducts.module.css';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class OurProducts extends React.Component {
    render() {
    return (

        /*container*/
        <div className={hello.container}>
            
            {/*header*/}
            <div className={hello.header}>
                <img className={hello.header_img} src="/images/ourproduct-img1.svg"/>
                <h1>Sản phẩm của chúng tôi</h1>
            </div>

            {/*frame*/}
            <div className={hello.frame}>

                {/*<img className={hello.move_left} src="/images/ourproduct-vector2.svg"/>*/}

                {/*container_box*/}
                <div className={hello.container_box}>

                    <Carousel
                        showArrows={true}
                        centerMode={true}
                        centerSlidePercentage={25}
                        infiniteLoop={false}
                        showStatus={false}
                        showIndicators={false}
                        width={1000}
                        transitionTime={500}
                        showThumbs={false}
                        showArrows={false}
                        renderArrowPrev={(onClickHandler, hasNext, label) =>
                            hasNext && (
                                <button type="button" className={hello.move_left} onClick={onClickHandler} title={label}>
                                    <img src="./images/ourproduct-vector2.svg"/>
                                </button>
                            )
                        }
                        renderArrowNext={(onClickHandler, hasNext, label) =>
                            hasNext && (
                                <button type="button" className={hello.move_right} onClick={onClickHandler} title={label}>
                                    <image src="./images/ourproduct-vector1.svg"/>
                                </button>
                            )
                        }
                    >

                    {/*grid_content*/}
                    <div className={hello.grid_content}>

                        {/*grid_content_upper*/}
                        <div className={hello.grid_content_upper}>

                            {/*grid_content_container*/}
                            <div className={hello.grid_content_container}>

                                {/*grid_content_container_upper*/}
                                <div className={hello.grid_content_container_upper}>
                                    <img src="/images/ourproduct-jamstack.svg"/>
                                    <div className={hello.profile_name}>
                                        <h3>JAMstack Vietnam</h3>
                                        <h4>@JAMstackVietnam</h4>
                                    </div>
                                </div>

                                {/*grid_content_container_lower*/}
                                <div className={hello.grid_content_container_lower}>
                                    <div className={hello.status_like}>
                                        <img src="/images/ourproduct-like.svg"/>
                                        <h3>132.554 people like this</h3>
                                    </div>
                                    <div className={hello.status_follow}>
                                        <img src="/images/ourproduct-checkmark.svg"/>
                                        <h3>233.247 people follow this</h3>
                                    </div>
                                </div>
                            </div>
                        
                            {/*grid_content_comment*/}
                            <div className={hello.grid_content_comment}>
                                <p>Fanpage Facebook</p>
                            </div>
                            
                        </div>

                        {/*grid_content_lower*/}
                        <div className={hello.grid_content_lower}>

                            {/*grid_content_image*/}                            
                            <img src="/images/ourproduct-mstore.svg" className={hello.grid_content_image}/>                            

                            {/*grid_content_comment*/}
                            <div className={hello.grid_content_comment}>
                                <p>Landing page MStore</p>
                            </div>

                        </div>
                    </div>

                    {/*grid_content*/}
                    <div className={hello.grid_content}>

                        {/*grid_content_upper*/}
                        <div className={hello.grid_content_upper}>
                        
                            {/*grid_content_container*/}
                            <div className={hello.grid_content_container}>

                                {/*grid_content_container_upper*/}
                                <div className={hello.grid_content_container_upper}>
                                    <img src="/images/ourproduct-chon.svg"/>
                                    <div className={hello.profile_name}>
                                        <h3>Chồn Lùi Bích Chy</h3>
                                        <h4>@chonluibichchy</h4>
                                    </div>
                                </div>

                                {/*grid_content_container_lower*/}
                                <div className={hello.grid_content_container_lower}>
                                    <div className={hello.status_like}>
                                        <img src="/images/ourproduct-like.svg"/>
                                        <h3>33.524 people like this</h3>
                                    </div>
                                    <div className={hello.status_follow}>
                                        <img src="/images/ourproduct-checkmark.svg"/>
                                        <h3>34.594 people follow this</h3>
                                    </div>
                                </div>
                            </div>

                            {/*grid_content_comment*/}
                            <div className={hello.grid_content_comment}>
                                <p>Fanpage Facebook</p>
                            </div>

                        </div>

                        <div className={hello.grid_content_lower}>

                            {/*grid_content_image*/}
                            <img src="/images/ourproduct-journal.svg" className={hello.grid_content_image}/>                            

                            {/*grid_content_comment*/}
                            <div className={hello.grid_content_comment}>
                                <p>Landing page Journal</p>
                            </div>

                        </div>
                    </div>

                    {/*grid_content*/}
                    <div className={hello.grid_content}>

                        {/*grid_content_upper*/}
                        <div className={hello.grid_content_upper}>
                        
                            {/*grid_content_container*/}
                            <div className={hello.grid_content_container}>

                                {/*grid_content_container_upper*/}
                                <div className={hello.grid_content_container_upper}>
                                    <img src="/images/ourproduct-sharefast.svg"/>
                                    <div className={hello.profile_name}>
                                        <h3>sharefast.me</h3>
                                        <h4>@sharefast.me</h4>
                                    </div>
                                </div>

                                {/*grid_content_container_lower*/}
                                <div className={hello.grid_content_container_lower}>
                                    <div className={hello.status_like}>
                                        <img src="/images/ourproduct-like.svg"/>
                                        <h3>2.437 people like this</h3>
                                    </div>
                                    <div className={hello.status_follow}>
                                        <img src="/images/ourproduct-checkmark.svg"/>
                                        <h3>2.137 people follow this</h3>
                                    </div>
                                </div>
                            </div>
                            
                                {/*grid_content_comment*/}
                                <div className={hello.grid_content_comment}>
                                    <p>Fanpage Facebook</p>
                                </div>
                            </div>
                            <div className={hello.grid_content_lower}>

                                {/*grid_content_image*/}
                                <img src="/images/ourproduct-flextop.svg" className={hello.grid_content_image}/>                            

                                {/*grid_content_comment*/}
                                <div className={hello.grid_content_comment}>
                                    <p>Landing page Flextop</p>
                                </div>

                            </div>
                        
                    </div>

                    {/*grid_content*/}
                    <div className={hello.grid_content}>

                        {/*grid_content_upper*/}
                        <div className={hello.grid_content_upper}>

                            {/*grid_content_container*/}
                            <div className={hello.grid_content_container}>

                                {/*grid_content_upper*/}
                                <div className={hello.grid_content_container_upper}>
                                    <img src="/images/ourproduct-mapas.svg"/>
                                    <div className={hello.profile_name}>
                                        <h3>MAPAS</h3>
                                        <h4>@mapasdesign</h4>
                                    </div>
                                </div>

                                {/*grid_content_lower*/}
                                <div className={hello.grid_content_container_lower}>
                                    <div className={hello.status_like}>
                                        <img src="/images/ourproduct-like.svg"/>
                                        <h3>62.437 people like this</h3>
                                    </div>
                                    <div className={hello.status_follow}>
                                        <img src="/images/ourproduct-checkmark.svg"/>
                                        <h3>67.137 people follow this</h3>
                                    </div>
                                </div>
                            </div>

                            {/*grid_content_comment*/}
                            <div className={hello.grid_content_comment}>
                                <p>Fanpage Facebook</p>
                            </div>
                        
                        </div>

                        <div className={hello.grid_content_lower}>

                            {/*grid_content_image*/}
                            <img src="/images/ourproduct-limpa.svg" className={hello.grid_content_image}/>                            

                            {/*grid_content_comment*/}
                            <div className={hello.grid_content_comment}>
                                <p>Web bán hàng Limpa</p>
                            </div>

                        </div>
                    </div>

                    </Carousel>

                </div>

                {/*<img className={hello.move_right} src="/images/ourproduct-vector1.svg"/>*/}
                
            </div>
            
        </div>
    )
}
}

//export default OurProducts
