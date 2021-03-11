import React from 'react'

function Footer() {
    return (
        <div className="footer">
        <div className="footer__main">
           <div className="container">
              <div className="row">
                 <div className="col-lg-3">
                    <div className="footer__main__logo">
                       <img src="https://bestwebcreator.com/shopwise/demo/assets/images/logo_light.png" alt=""/>
                    </div>
                    <span className="footer__main__content">
                       Trang web sử dụng template từ Shopwise
                    </span>
                    <div className="footer__main__link">
                       <i className="fab fa-facebook"></i>
                       <i className="fab fa-twitter"></i>
                       <i className="fab fa-instagram"></i>
                       <i className="fab fa-google"></i>
                       <i className="fab fa-youtube"></i>
                    </div>
                 </div>
                 <div className="col-lg-2">
                 <h3 className="footer__main__title">
                    Useful Links
                 </h3>
                 <ul className="footer__main__list">
                    <li className="footer__main__list__item">
                       About Us
                    </li>
                    <li className="footer__main__list__item">
                       FAQ
                    </li>
                    <li className="footer__main__list__item">
                       Location
                    </li>
                    <li className="footer__main__list__item">
                       Affiliates  
                    </li>
                    <li className="footer__main__list__item">
                       Contact
                    </li>
                 </ul>
              </div>
              <div className="col-lg-2">
                 <h3 className="footer__main__title">
                    Category
                 </h3>
                 <ul className="footer__main__list">
                    <li className="footer__main__list__item">
                       Men
                    </li>
                    <li className="footer__main__list__item">
                       woman
                    </li>
                    <li className="footer__main__list__item">
                       kids
                    </li>
                    <li className="footer__main__list__item">
                       best seller
                    </li>
                    <li className="footer__main__list__item">
                       new arrivals
                    </li>
                 </ul>
              </div>
              <div className="col-lg-2">
                 <h3 className="footer__main__title">
                    my account
                 </h3>
                 <ul className="footer__main__list">
                    <li className="footer__main__list__item">
                       my account
                    </li>
                    <li className="footer__main__list__item">
                       discount
                    </li>
                    <li className="footer__main__list__item">
                       returns
                    </li>
                    <li className="footer__main__list__item">
                       orders history
                    </li>
                    <li className="footer__main__list__item">
                       orders tracking
                    </li>
                 </ul>
              </div>
              <div className="col-lg-3">
                 <h3 className="footer__main__title">
                    Useful Links
                 </h3>
                 <ul className="footer__main__list">
                    <li className="footer__main__list__item footer__location">
                       <i className="fas fa-map-marker-alt " ></i>
                       <span className="footer__main__list__item__text">
                          131/19/21/49 tổ 19c ấp an hòa xã hóa TP biên hòa đồng nai
                       </span>
                    </li>
                    <li className="footer__main__list__item footer__location">
                       <i className="fas fa-envelope"></i>
                       <span className="footer__main__list__item__text">
                          nguyenducdungg12@gmail.com
                       </span>
                    </li>
                    <li className="footer__main__list__item footer__location">
                       <i className="fas fa-mobile-alt"></i>
                       <span className="footer__main__list__item__text">
                         +84 377752897
                       </span>
                    </li>
                 </ul>
              </div>
              </div>
           </div>
        </div>
        <div className="footer__end">
           <div className="container">
              <div className="footer__end__wrap">
                 <span className="footer__end__copyright">
                    © 2020 All Rights Reserved by Bestwebcreator
                 </span>
                 <div className="footer__end__pay">
                    <img src="https://bestwebcreator.com/shopwise/demo/assets/images/visa.png" alt=""/>
                    <img src="https://bestwebcreator.com/shopwise/demo/assets/images/discover.png" alt=""/>
                    <img src="https://bestwebcreator.com/shopwise/demo/assets/images/master_card.png" alt=""/>
                    <img src="https://bestwebcreator.com/shopwise/demo/assets/images/paypal.png" alt=""/>
                    <img src="https://bestwebcreator.com/shopwise/demo/assets/images/amarican_express.png" alt=""/>
                 </div>
              </div>
           </div>
        </div>
        </div>
    )
}

export default Footer
