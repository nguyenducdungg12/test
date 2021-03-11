import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {openModal} from '../../store/Modal'
import { toast } from 'react-toastify';
import {AddCartProduct} from '../../store/Cart'
import {Link} from 'react-router-dom'
import CallApi from '../../helper/CallApi'
function SlideItem(props) {
    const dispatch = useDispatch();
    const URL_API = process.env.REACT_APP_URL_API;
    const {title,price,description,imagePath,_id} = props.data;
    const User = useSelector(state => state.User)
    function onOpenModal(){
        dispatch(openModal(imagePath));
    }
    function addProductToCart(){
        dispatch(AddCartProduct(props.data));
        toast.success('Thêm giỏ hàng thành công')
    }
    function addProductToWishList(){
        CallApi(`${URL_API}/api/user/wishlist`,'post',props.data).then(res=>{
            if(res.data.msgID==1){
                toast.error(res.data.msg);
            }
            else{
                toast.success(res.data.msg);
            }
        })
    }
    return (
        <div className="product__exclusiveProduct__table__list__item">
            <Link to={`/productdetail/${_id}`}>
                
           <div className="product__exclusiveProduct__table__list__imgs Hot">
            <span className="pr_sale yellow-color">
                new
                               </span>
            <img src={imagePath} alt="" className="product__exclusiveProduct__table__list__img" />
        </div>
              <div className="product__exclusiveProduct__table__list__content">
            <span className="product__exclusiveProduct__table__list__content__name">
                {title}
                              </span>
            <div className="product__exclusiveProduct__table__list__content__price">
                <span className="product__exclusiveProduct__table__list__content__price__new">
                    ${price}
                                 </span>
              
                <div className="product__exclusiveProduct__table__list__content_feedback">
                    <div className="product__exclusiveProduct__table__list__content_feedback__star">
                        <i className="fas fa-star star star-yello"></i>
                        <i className="fas fa-star star star-yello"></i>
                        <i className="fas fa-star star star-yello"></i>
                        <i className="fas fa-star star star-yello"></i>
                        <i className="far fa-star star"></i>
                    </div>
                    <span className="product__exclusiveProduct__table__list__content_feedback__sold">
                        (21)
                                    </span>
                </div>
            </div>
            <p className="product__exclusiveProduct__table__list__content__description">
                {description}
            </p>
        </div>
            </Link>
            <ul className="product__exclusiveProduct__table__list__imgs__list">
                <li className="product__exclusiveProduct__table__list__imgs__item" onClick={addProductToCart}>
                    <i className="fas fa-shopping-cart"></i>
                </li>
            {User &&
                <li className="product__exclusiveProduct__table__list__imgs__item" onClick={addProductToWishList}>
                          <i class="fas fa-stream"></i>
                        </li>}
                <li className="product__exclusiveProduct__table__list__imgs__item" onClick={onOpenModal}>
                            <i className="fas fa-search-plus"></i>
                </li>
            </ul>
    </div>
    )
}

export default SlideItem
