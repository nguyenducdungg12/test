import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import CartHeaderItem from './CartHeaderItem'
import {Link} from 'react-router-dom'

function CartHeader() {
   const dispatch = useDispatch();
   const cart = useSelector(state => state.Cart)
   function listCartItem (arr){
      var content='';
      if(arr){
        content = arr.listCart.map((cart,stt)=><CartHeaderItem key={stt} data={cart}/>)
      }
      return content;
   }
    return (
        <div className="header__navbar__content__item header__navbar__content__item--cart">
        <i className="fas fa-shopping-cart header__navbar__content__item--icon" style={{position:'relative'}}>
        <span className="header__navbar__content__item__cart__quantity">
        {cart ? cart.listCart.length : 0}
        </span>
        </i>
        <div className="header__navbar__content__item--carts">
           <ul className="header__navbar__content__item--carts__list">
              {cart.listCart.length>0 ? listCartItem(cart) : <p className='header__navbar__content__item--carts__list_empty'>Giỏ hàng của bạn trống</p>}
           </ul>
           <div className="header__navbar__content__item--carts__total">
              <div className="header__navbar__content__item--carts__total__pay">
                 <span className="header__navbar__content__item--cart__pay__text">
                 subtotal: 
                 </span>
                 <span className="header__navbar__content__item--carts__pay__price">
                 {cart.totalPrice} $
                 </span>
              </div>
              <div className="header__navbar__content__item--carts__total__btn">
                 <Link to='/cart'className="btn-1 header__navbar__content__item--carts__total__btn__view-cart">
                    view cart
                 </Link>
              </div>
           </div>
        </div>
     </div>
    )
}

export default CartHeader
