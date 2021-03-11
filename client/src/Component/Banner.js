import React from 'react'

function Banner() {
    return (
        <div>
            <div className="banner__product">
             <img src="https://bestwebcreator.com/shopwise/demo/assets//images/tranding_img.png" alt="" className="banner__product__img"/>
            <div className="banner__product__content">
                <span className="banner__product__content__header">
                    New season trends!
                </span>
                <span className="banner__product__content__title">
                    Best Summer Collection
                </span>
                <span className="banner__product__content__sale">
                    Sale Get up to 50% Off
                </span>
                <button className="btn-1 banner__product__content__btn header__navbar__content__item--carts__total__btn__check-out">
                    shop now
                </button>
            </div>
        </div>
        </div>
    )
}

export default Banner
