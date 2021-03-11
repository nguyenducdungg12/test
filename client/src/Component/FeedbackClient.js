import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className="product__sildes__btn-right" onClick={onClick}> <i className="fas fa-chevron-right"></i></div>
    );
}
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className="product__sildes__btn-left" onClick={onClick}><i className="fas fa-chevron-left"></i>
        </div>
    );
  }
function FeedbackClient() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>
    };
    return (
        <div className="banner__client ">
            <div className="banner__client__container overflow-hidden">
                <Slider {...settings}>
                    <div className="banner__client__slide">
                        <h3 className="banner__client__slide__title">
                            Our Client Say!
                      </h3>
                        <span className="banner__client__slide__content">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam amet animi blanditiis consequatur debitis dicta distinctio, enim error eum iste libero modi nam natus perferendis possimus quasi sint sit tempora voluptatem.
                      </span>
                        <div className="banner__client__slide__info">
                            <img src="https://bestwebcreator.com/shopwise/demo/assets/images/user_img1.jpg" alt="" />
                            <div className="banner__client__slide__info__text">
                                <span className="banner__client__slide__info__text__name">
                                    dung
                            </span>
                                <span className="banner__client__slide__info__text__job">
                                    Designer
                            </span>
                            </div>
                        </div>
                    </div>
                    <div className="banner__client__slide">
                        <h3 className="banner__client__slide__title">
                            Our Client Say!
                      </h3>
                        <span className="banner__client__slide__content">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam amet animi blanditiis consequatur debitis dicta distinctio, enim error eum iste libero modi nam natus perferendis possimus quasi sint sit tempora voluptatem.
                      </span>
                        <div className="banner__client__slide__info">
                            <img src="https://bestwebcreator.com/shopwise/demo/assets/images/user_img1.jpg" alt="" />
                            <div className="banner__client__slide__info__text">
                                <span className="banner__client__slide__info__text__name">
                                    dung
                            </span>
                                <span className="banner__client__slide__info__text__job">
                                    Designer
                            </span>
                            </div>
                        </div>
                    </div>
                    <div className="banner__client__slide">
                        <h3 className="banner__client__slide__title">
                            Our Client Say!
                      </h3>
                        <span className="banner__client__slide__content">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam amet animi blanditiis consequatur debitis dicta distinctio, enim error eum iste libero modi nam natus perferendis possimus quasi sint sit tempora voluptatem.
                      </span>
                        <div className="banner__client__slide__info">
                            <img src="https://bestwebcreator.com/shopwise/demo/assets/images/user_img1.jpg" alt="" />
                            <div className="banner__client__slide__info__text">
                                <span className="banner__client__slide__info__text__name">
                                    dung
                            </span>
                                <span className="banner__client__slide__info__text__job">
                                    Designer
                            </span>
                            </div>
                        </div>
                    </div>
                    <div className="banner__client__slide">
                        <h3 className="banner__client__slide__title">
                            Our Client Say!
                      </h3>
                        <span className="banner__client__slide__content">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam amet animi blanditiis consequatur debitis dicta distinctio, enim error eum iste libero modi nam natus perferendis possimus quasi sint sit tempora voluptatem.
                      </span>
                        <div className="banner__client__slide__info">
                            <img src="https://bestwebcreator.com/shopwise/demo/assets/images/user_img1.jpg" alt="" />
                            <div className="banner__client__slide__info__text">
                                <span className="banner__client__slide__info__text__name">
                                    dung
                            </span>
                                <span className="banner__client__slide__info__text__job">
                                    Designer
                            </span>
                            </div>
                        </div>
                    </div>
                    <div className="banner__client__slide">
                        <h3 className="banner__client__slide__title">
                            Our Client Say!
                      </h3>
                        <span className="banner__client__slide__content">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam amet animi blanditiis consequatur debitis dicta distinctio, enim error eum iste libero modi nam natus perferendis possimus quasi sint sit tempora voluptatem.
                      </span>
                        <div className="banner__client__slide__info">
                            <img src="https://bestwebcreator.com/shopwise/demo/assets/images/user_img1.jpg" alt="" />
                            <div className="banner__client__slide__info__text">
                                <span className="banner__client__slide__info__text__name">
                                    dung
                            </span>
                                <span className="banner__client__slide__info__text__job">
                                    Designer
                            </span>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default FeedbackClient
