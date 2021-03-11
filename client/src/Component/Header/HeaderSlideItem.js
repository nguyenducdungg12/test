import React from 'react'

function HeaderSlideItem(props) {
    const {title,sale,imgPath} = props.data;
    const {numberStt,slideNumber} = props;
    return (
        <div className={slideNumber==numberStt ? 'active__slide header__slides__item' : 'header__slides__item'}>
            <img src={imgPath} alt="" className="header__slides__item__img"/>
            <div className="header__slides__item__info ">
                <span className="header__slides__item__info__discount" style={slideNumber==numberStt ? {animation:"LeftTo 0.5s forwards"} : {}}>
                     {sale}
                </span>
                <span className="header__slides__item__info__name " style={slideNumber==numberStt ? {animation:"LeftTo 0.5s forwards"} : {}}>
                  {title}
                </span>
                <button className="header__navbar__content__item--carts__total__btn__check-out header__slides__item__info__btn btn-1" style={slideNumber==numberStt ? {animation:"LeftTo 0.5s forwards"} : {}}>
                       shop now
                </button>
        </div>
     </div>
    )
}

export default HeaderSlideItem
