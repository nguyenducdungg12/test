import React from 'react'
import {useDispatch} from 'react-redux'
import {IncreaseQuantity,DecreaseQuantity,RemovieCartProduct} from '../store/Cart'
import {Link} from 'react-router-dom'
function CartItem(props){
    const dispatch = useDispatch();
    const {title,price,quantity,imagePath,_id} = props.data;
    function onIncreaseQuantity(){
        dispatch(IncreaseQuantity(_id));
    }
    function onDecreaseQuantity(e){
        if(quantity<=1){
            return;
        }
        dispatch(DecreaseQuantity(_id));
    }
    function removieCartItem(){
        dispatch(RemovieCartProduct(_id));
    }
    return (
        <tr>
        <td className="product-thumbnail"><Link to={`/productdetail/${_id}`}><img src={imagePath} alt="product1" /></Link></td>
        <td className="product-name" ><Link to={`/productdetail/${_id}`}>{title}</Link></td>
        <td className="product-price" >${price}</td>
        <td className="product-quantity" ><div className="quantity">
            <input type="button" value="-" className="minus" onClick={onDecreaseQuantity}/>
            <input type="text" name="quantity" value={quantity} title="Qty" className="qty" size="4" />
            <input type="button" value="+" className="plus" onClick={onIncreaseQuantity}/>
        </div></td>
        <td className="product-subtotal" data-title="Total">${price*quantity}</td>
        <td className="product-remove" data-title="Remove"><button className='btn btn-danger' onClick={removieCartItem}>Xóa</button></td>
    </tr>
    )
}

function CartDetail(props) {
    const {listCart,totalPrice} = props;
    return (
        <div className="row">
            <div className="col-12">
                <div className="table-responsive shop_cart_table">
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="product-thumbnail">Image</th>
                                <th className="product-name">Product</th>
                                <th className="product-price">Price</th>
                                <th className="product-quantity">Quantity</th>
                                <th className="product-subtotal">Total</th>
                                <th className="product-remove">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                           {listCart.length >0 ? listCart.map((data,stt)=><CartItem key={stt} data={data}/>) : ''} 
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="6" className="px-0">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-lg-4 col-md-6 mb-3 mb-md-0">
                                            <div className="coupon field_form input-group d-flex align-items-center">
                                                <input type="text" value="" className="form-control form-control-sm" placeholder="Enter Coupon Code.." />
                                                <div className="input-group-append">
                                                    <button className="btn btn-primary" type="submit">Apply Coupon</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-8 col-md-6 text-left text-md-right">
                                            <button className="btn btn-primary" type="submit">Update Cart</button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
            <div className="col-lg-12 mt-5">
            <div className="border p-3 p-md-4">
                    <div className="heading_s1 mb-3">
                        <h4>Cart Totals</h4>
                    </div>
                    <div className="table-responsive">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td className="cart_total_label">Cart Subtotal</td>
                                    <td className="cart_total_amount">${totalPrice}</td>
                                </tr>
                                <tr>
                                    <td className="cart_total_label">Shipping</td>
                                    <td className="cart_total_amount">Free Shipping</td>
                                </tr>
                                <tr>
                                    <td className="cart_total_label">Total</td>
                                    <td className="cart_total_amount"><strong>${totalPrice}</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <a href="#" className="btn btn-primary" style={{margin:'0 auto',display:'block'}}>Proceed To CheckOut</a>
                </div>
            </div>
        </div>
    )
}

export default CartDetail
