import React from 'react'

function OurProducts() {
    return (

        /*container*/
        <div class="container">

            {/*header*/}
            <div class="header">
                <img id="header-img" src="/images/ourproduct-img1.svg"/>
                <p>Sản phẩm của chúng tôi</p>
            </div>

            {/*frame*/}
            <div class="frame">

                {/*vector*/}
                <img class="vector" id="vector1" src="/images/ourproduct-vector1.svg"/>
                <img class="vector" id="vector2" src="/images/ourproduct-vector2.svg"/>

                {/*container-grid*/}
                <div class="container-grid">

                    {/*grid-content*/}
                    <div class="grid-content">

                        {/*grid-content-container*/}
                        <div class="grid-content-container">

                            {/*grid-content-upper*/}
                            <div class="grid-content-upper">
                                <img src="/images/ourproduct-jamstack.svg"/>
                                <div class="profile-name">
                                    <h3>JAMstack Vietnam</h3>
                                    <h4>@JAMstackVietnam</h4>
                                </div>
                            </div>

                            {/*grid-content-lower*/}
                            <div class="grid-content-lower">

                            </div>
                        </div>

                        {/*grid-content-comment*/}
                        <div class="grid-content-comment">

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default OurProducts
