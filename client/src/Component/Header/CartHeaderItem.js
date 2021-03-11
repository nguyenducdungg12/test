import React from 'react'
import {useDispatch} from 'react-redux'
import { toast } from 'react-toastify';
import {RemovieCartProduct} from '../../store/Cart'
import {Link} from 'react-router-dom'
function CartHeaderItem(props) {
    const dispatch = useDispatch();
    const {_id,title,price,quantity,imagePath}  = props.data;
    function onRemoveCartProduct(){
        dispatch(RemovieCartProduct(_id));
        toast.success('Xóa thành công');
    }
    
    return (
        <li className="header__navbar__content__item--carts__item">
            <Link to={`/productdetail/${_id}`}>
        <img src={imagePath} alt=''className="header__navbar__content__item--carts__item__img"/>
        </Link>

        <div className="header__navbar__content__item--carts__item__detail">
           <span className="header__navbar__content__item--carts__item__detail__name">
          {title}
           </span>
           <span className="header__navbar__content__item--carts__item__detail__quantity">
           {quantity} x {price}
           </span>
        </div>
        <i className="fas fa-times" onClick={onRemoveCartProduct}></i>
     </li>
    )
}

export default CartHeaderItem
