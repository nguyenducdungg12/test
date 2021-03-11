import React from 'react'
import CallApi from '../helper/CallApi'
import {useDispatch} from 'react-redux'
import {AddCartProduct} from '../store/Cart'
import { toast } from 'react-toastify';
import {Link} from 'react-router-dom'

function WishListItem(props) {
    const dispatch = useDispatch();
    const URL_API = process.env.REACT_APP_URL_API;
    const { imagePath, title, price, status,_id,idProduct } = props.data;
    const {RenderWishList} = props;
    function onRemovieProductInWishList(e){
        e.preventDefault();
        CallApi(`${URL_API}/api/user/wishlist/${_id}`,'delete').then(res=>{
            toast.success(res.data.msg);
        });
      RenderWishList();
    }
    function onAddToCart(e){
        e.preventDefault();
        dispatch(AddCartProduct({
            imagePath:imagePath,
            title:title,
            price:price,
            _id:idProduct,
        }))
        toast.success('Thêm vào giỏ hàng thành công')
    }
    return (
        <tr>
            <td class="product-thumbnail"><Link to={`/productdetail/${idProduct}`}><img src={imagePath} alt="product1" /></Link></td>
            <td class="product-name" data-title="Product"><Link to={`/productdetail/${idProduct}`}>{title}</Link></td>
            <td class="product-price" data-title="Price">${price}</td>
            <td class="product-add-to-cart"><a href="#" class="btn btn-primary" onClick={onAddToCart}> Add to Cart</a></td>
            <td class="product-remove" data-title="Remove"><a href="#" class="btn btn-danger" onClick={onRemovieProductInWishList}> Xóa</a></td>
        </tr>
    )
}

function WishList(props) {
    const {RenderWishList} = props;
    return (
        <div class="row">
            <div class="col-12">
                <div class="table-responsive wishlist_table">
                    <table class="table">
                        <thead>
                            <tr>
                                <th class="product-thumbnail">Hình Ảnh</th>
                                <th class="product-name">Product</th>
                                <th class="product-price">Price</th>
                                <th class="product-add-to-cart">Add To Cart</th>
                                <th class="product-remove" >Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                           {props.dataWishList && props.dataWishList.map((data,stt)=><WishListItem key={stt} data={data} RenderWishList={RenderWishList}/>) }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default WishList
