import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {openModal} from '../../store/Modal'
import {AddCartProduct} from '../../store/Cart'
import { toast } from 'react-toastify';
import {Link} from 'react-router-dom'
import CallApi from '../../helper/CallApi'
function ProductItem(props) {
    const URL_API = process.env.REACT_APP_URL_API;
    const dispatch = useDispatch();
    const User = useSelector(state => state.User)
    const {title,price,description,imagePath,_id} = props.data;
    function onOpenModal(e){
        e.stopPropagation();
        dispatch(openModal(imagePath));
    }
    function addProductToCart(e){
        dispatch(AddCartProduct(props.data));
        toast.success('Thêm giỏ hàng thành công')
    }
    function addProductToWishList(){
        CallApi(`${URL_API}/api/user/wishlist`,'post',props.data).then(res=>{
            if(res.data.message &&res.data.message.name.message=="jwt expired"){
            }
            if(res.data.msgID==1){
                toast.error(res.data.msg);
            }
            else{
                toast.success(res.data.msg);
            }
        })
    }
    return (
        <div className="col-xl-3">
            <div className="product__exclusiveProduct__table__list__item">
                <div className="product__exclusiveProduct__table__list__imgs Hot">
                    <span className="pr_sale yellow-color">
                        new
                                       </span>
                    <img src={imagePath} alt="" className="product__exclusiveProduct__table__list__img" />
                </div>
                <div className="product__exclusiveProduct__table__list__content">
                    <Link to={`/productdetail/${_id}`} className="product__exclusiveProduct__table__list__content__name">
                        {title}
                                      </Link>
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
                <ul className="product__exclusiveProduct__table__list__imgs__list">
                        <li className="product__exclusiveProduct__table__list__imgs__item" onClick ={addProductToCart}>
                            <i className="fas fa-shopping-cart"></i>
                        </li>
                      {User &&
                        <li className="product__exclusiveProduct__table__list__imgs__item" onClick={addProductToWishList}>
                          <i className="fas fa-stream"></i>
                        </li>}
                        <li className="product__exclusiveProduct__table__list__imgs__item" onClick={onOpenModal}>
                            <i className="fas fa-search-plus"></i>
                        </li>
                    </ul>
            </div>
        </div>
    )
}

export default ProductItem
