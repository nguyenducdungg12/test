import React,{useState} from 'react'
import Slide from './Slide/Slide'
import {AddCartProduct} from '../store/Cart'
import {useDispatch} from 'react-redux'
import { toast } from 'react-toastify';

function ProductDetail(props) {
    const dispatch = useDispatch();
    const [tab, settab] = useState(1)
    const [quantity, setquantity] = useState(1);
    const product= {...props.data};
    const onSwichTab = (e)=>{
        settab(e.target.getAttribute('tab'));
    }
    function decreaseQuantity(){
        setquantity(quantity+1);
    }
    function increaseQuantity() {
        if(quantity<=1){
            return;
        }
        setquantity(quantity-1);
    }
    function onChangeValue(){

    }
    function onAddToCart(){
        product.quantity=quantity;
        dispatch(AddCartProduct(product));
        toast.success('Thêm vào giỏ hàng thành công');
    }
    return (
        <div className="ProductDetail">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
                        <div className="product-image">
                            <div className="product_img_box">
                                <img id="product_img" src={product.imagePath} alt="product_img1" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="pr_detail">
                            <div className="product_description">
                                <h4 className="product_title"><a href="#">{product.title}</a></h4>
                                <div className="product_price">
                                    <span className="price">${product.price}</span>
                                    <del>${product.price+55}</del>
                                    <div className="on_sale">
                                        <span>35% Off</span>
                                    </div>
                                </div>
                                <div className="rating_wrap">
                                    <div className="rating">
                                        <div className="product_rate" ></div>
                                    </div>
                                    <span className="rating_num">(21)</span>
                                </div>
                                <div className="pr_desc">
                                    <p>{product.description}</p>
                                </div>
                                <div className="product_sort_info">
                                    <ul>
                                        <li><i className="fas fa-shield-alt"></i> 1 Year AL Jazeera Brand Warranty</li>
                                        <li><i className="fas fa-undo"></i> 30 Day Return Policy</li>
                                        <li><i className="fas fa-hand-holding-usd"></i> Cash on Delivery available</li>
                                    </ul>
                                </div>
                               
                                <div className="pr_switch_wrap">
                                    <span className="switch_lable">Size</span>
                                    <div className="product_size_switch">
                                        <span>xs</span>
                                        <span>s</span>
                                        <span>m</span>
                                        <span>l</span>
                                        <span>xl</span>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="cart_extra">
                                <div className="cart-product-quantity">
                                    <div className="quantity">
                                        <input type="button" value="-" className="minus" onClick={increaseQuantity}/>
                                        <input type="text" name="quantity" onChange={onChangeValue} value={quantity} title="Qty" className="qty" size="4" />
                                        <input type="button" value="+" className="plus" onClick={decreaseQuantity}/>
                                    </div>
                                </div>
                                <div className="cart_btn">
                                    <button className="btn btn-primary" type="button" onClick={onAddToCart}> Add to cart</button>
                                    <a className="add_compare" href="#"><i className="icon-shuffle"></i></a>
                                    <a className="add_wishlist" href="#"><i className="icon-heart"></i></a>
                                </div>
                            </div>
                            <hr />
                            <ul className="product-meta">
                                <li>SKU: <a href="#">{product._id}</a></li>
                                <li>Category: <a href="#">{product.category}</a></li>
                                <li>Tags: <a href="#" rel="tag">Cloth</a>, <a href="#" rel="tag">printed</a> </li>
                            </ul>

                            <div className="product_share">
                                <span>Share:</span>
                                <ul className="social_icons">
                                    <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fab fa-google"></i></a></li>
                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="large_divider clearfix"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="tab-style3">
                            <ul className="nav nav-tabs" role="tablist">
                                <li className={`nav-item ${tab==1 ? 'nav-item-active' : ''}`} tab={1}onClick={onSwichTab}>
                                    Description
                                </li>
                                <li className={`nav-item ${tab==2 ? 'nav-item-active' : ''}`}tab={2} onClick={onSwichTab}>
                                    Addition Info
                                </li>
                                <li className={`nav-item ${tab==3 ? 'nav-item-active' : ''}`} tab={3}onClick={onSwichTab}>
                                    Review
                                </li>
                            </ul>
                            <div className="tab-content shop_info_tab mt-2">
                                <div className="tab" style={tab==1 ? {display:'block'} : {display:'none'}}id="Description" role="tabpanel" aria-labelledby="Description-tab">
                                    <p>{product.description}</p>
                                </div>
                                <div className="tab" style={tab==2 ? {display:'block'} : {display:'none'}}id="Additional-info" role="tabpanel" aria-labelledby="Additional-info-tab">
                                    <table className="table table-bordered">
                                        <tbody>

                                        <tr>
                                            <td>Capacity</td>
                                            <td>5 Kg</td>
                                        </tr>
                                        <tr>
                                            <td>Color</td>
                                            <td>Black, Brown, Red,</td>
                                        </tr>
                                        <tr>
                                            <td>Water Resistant</td>
                                            <td>Yes</td>
                                        </tr>
                                        <tr>
                                            <td>Material</td>
                                            <td>Artificial Leather</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="tab" style={tab==3 ? {display:'block'} : {display:'none'}}id="Reviews" role="tabpanel" aria-labelledby="Reviews-tab">
                                    <div className="comments">
                                        <h5 className="product_tab_title">2 Review For <span>Blue Dress For Woman</span></h5>
                                        <ul className="list_none comment_list mt-4">
                                            <li>
                                                <div className="comment_img">
                                                    <img src="assets/images/user1.jpg" alt="user1" />
                                                </div>
                                                <div className="comment_block">
                                                    <div className="rating_wrap">
                                                        <div className="rating">
                                                            <div className="product_rate" ></div>
                                                        </div>
                                                    </div>
                                                    <p className="customer_meta">
                                                        <span className="review_author">Alea Brooks</span>
                                                        <span className="comment-date">March 5, 2018</span>
                                                    </p>
                                                    <div className="description">
                                                        <p>Lorem Ipsumin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="comment_img">
                                                    <img src="assets/images/user2.jpg" alt="user2" />
                                                </div>
                                                <div className="comment_block">
                                                    <div className="rating_wrap">
                                                        <div className="rating">
                                                            <div className="product_rate" ></div>
                                                        </div>
                                                    </div>
                                                    <p className="customer_meta">
                                                        <span className="review_author">Grace Wong</span>
                                                        <span className="comment-date">June 17, 2018</span>
                                                    </p>
                                                    <div className="description">
                                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="review_form field_form">
                                        <h5>Add a review</h5>
                                        <form className="row mt-3">
                                            <div className="form-group col-12">
                                                <div className="star_rating">
                                                    <span data-value="1"><i className="far fa-star"></i></span>
                                                    <span data-value="2"><i className="far fa-star"></i></span>
                                                    <span data-value="3"><i className="far fa-star"></i></span>
                                                    <span data-value="4"><i className="far fa-star"></i></span>
                                                    <span data-value="5"><i className="far fa-star"></i></span>
                                                </div>
                                            </div>
                                            <div className="form-group col-12">
                                                <textarea required="required" placeholder="Your review *" className="form-control" name="message" rows="4"></textarea>
                                            </div>
                                            <div className="form-group col-md-6">
                                                <input required="required" placeholder="Enter Name *" className="form-control" name="name" type="text" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <input required="required" placeholder="Enter Email *" className="form-control" name="email" type="email" />
                                            </div>

                                            <div className="form-group col-12">
                                                <button type="submit" className="btn btn-fill-out" name="submit" value="Submit">Submit Review</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="small_divider"></div>
                    </div>
                </div>
                <div className="row mt-5">
                    <h3 style={{margin:'0 0 25px 15px'}}>
                        Related Product
                    </h3>
                    <div className="col-lg-12">
                        <Slide></Slide>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
