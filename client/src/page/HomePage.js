import React,{useEffect,useState} from 'react'
import Product from '../Component/Product/Product'
import Banner from '../Component/Banner'
import FeedbackClient from '../Component/FeedbackClient'
import HeaderSlide from '../Component/Header/HeaderSlide'
import ListProduct from '../Component/ListProduct/ListProduct'
import {getUser} from '../store/User'
import {isMovePage} from '../store/Render'
import CallApi from '../helper/CallApi'
import {useDispatch} from 'react-redux'
function HomePage() {
    const dispatch = useDispatch();
    const URL_API = process.env.REACT_APP_URL_API;
    const accessToken = localStorage.getItem('accessToken');
    const [ListProducts, setListProducts] = useState(null);
    useEffect(() => {
        window.scrollTo(0,0); 
        dispatch(isMovePage());
        const responApi = CallApi(`${URL_API}/api/products`,'get');
        responApi.then((res)=>setListProducts(res.data));
        if(accessToken){
            dispatch(getUser(accessToken))}; 
    },[])
    return (
        <div>
            <HeaderSlide/>
             <Product/>
            <Banner/>
            <ListProduct ListProduct={ListProducts}/>
            <FeedbackClient/>
        </div>
    )
}

export default HomePage
