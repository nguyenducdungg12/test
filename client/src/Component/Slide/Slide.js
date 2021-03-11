import React, { useEffect,useState } from "react";
import Slider from "react-slick";
import {useDispatch,useSelector} from 'react-redux'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideItem from './SlideItem'
import {getListProduct} from '../../store/ListProduct'
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
function Slide() {
    const dispatch = useDispatch();
    const ListProduct = useSelector(state => state.ListProduct)
    useEffect(()=>{
        dispatch(getListProduct({}));
    },[])
       const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 4,
            nextArrow: <SampleNextArrow/>,
            prevArrow: <SamplePrevArrow/>,
            responsive: [
                {
                    breakpoint: 960,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll:3,
                      infinite: true,
                      dots: true
                    }
                  },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                  }
                },
                
            ]
        };
        function ListSlide(data){
            var content='';
            if(data){
                content = data.map((item,stt)=><SlideItem key={stt} data={item}/>)
            }
            return content;
        }
        return (
            <div className="container">
                
                <Slider {...settings}>
                    {ListProduct ? ListSlide(ListProduct.filter((item,stt)=>stt<8)) : ''}
                </Slider>
            </div>
        );
}

export default Slide
