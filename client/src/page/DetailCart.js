import React,{useEffect} from 'react'
import Breadcum from '../Component/Breadcum'
import CartDetail from '../Component/CartDetail'
import {useSelector,useDispatch} from 'react-redux'
import {isMovePage} from '../store/Render'
function DetailCart() {
    const dispatch = useDispatch();
    const cart = useSelector(state=>state.Cart);
    useEffect(() => {
        window.scrollTo(0,0);
        dispatch(isMovePage());
    }, [])
    return (
        <div className='Cart'>
            <Breadcum title='Shopping Cart' breadcumList={['Home']}/>
            <div className="CartDetail">
                <div className="container">
                    <CartDetail listCart = {cart.listCart} totalPrice={cart.totalPrice}/>
                </div>
            </div>
        </div>
    )
}

export default DetailCart
