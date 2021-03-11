import React from 'react'

function ProductBanner() {
    return (
        <div className="product__Newproduct">
                <div className="container">
                   <div className="row justify-content-between p-2">
                      <div className="lg-6 product__Newproduct__item">
                         <img src="https://webshopping-b79b8.web.app/img/shop_banner_img2.jpg" alt="" className="product__Newproduct__img"/>
                         <div className="product__Newproduct__content">
                            <span className="product__Newproduct__content__category">
                            Super Sale
                            </span>
                            <span className="product__Newproduct__content__name">
                            New Collection
                            </span>
                            <span className="product__Newproduct__content__shopNow">
                            shop now
                            </span>
                         </div>
                      </div>
                      <div className="lg-6 product__Newproduct__item">
                         <img src="https://webshopping-b79b8.web.app/img/shop_banner_img1.jpg" alt="" className="product__Newproduct__img"/>
                         <div className="product__Newproduct__content">
                            <span className="product__Newproduct__content__category">
                            Super Sale
                            </span>
                            <span className="product__Newproduct__content__name">
                            New Collection
                            </span>
                            <span className="product__Newproduct__content__shopNow">
                            shop now
                            </span>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
    )
}

export default ProductBanner
