import React,{useEffect} from 'react'
import {Switch,Route } from 'react-router-dom'
import Footer from './Component/Footer'
import Modal from './Component/Modal'
import Header from './Component/Header/Header'
import Homepage from './page/HomePage'
import DetailCart from './page/DetailCart'
import ListProduct from './page/ListProduct'
import Contact from './page/Contact'
import DetailProduct from './page/DetailProduct'
import Register from './page/Register'
import Signin from './page/SignIn'
import WishList from './page/WishList'
import ErorPage from './page/ErrorPage'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Client() {
    return (
        <div className="app">
            <Header></Header>
                <Switch>
                    <Route path='/' exact component={Homepage}/> 
                    <Route path='/contact' component={Contact}/> 
                    <Route path='/category/:category' component={ListProduct}/> 
                    <Route path='/search' component={ListProduct}/> 
                    <Route path='/productdetail/:idproduct' component={DetailProduct}/> 
                    <Route path='/cart' component={DetailCart}/>
                    <Route path='/register' component={Register}/>
                    <Route path='/signin' component={Signin}/>
                    <Route path='/user/wishlist' component={WishList}/>
                    <Route
                    component={ErorPage}
                    />
                </Switch>
            <Footer/>
            <Modal/>
            <ToastContainer autoClose={2000} position="bottom-right"/>
        </div>
    )
}

export default Client
