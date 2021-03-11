import React,{useEffect,useState} from 'react'
import Breadcum from '../Component/Breadcum'
import ProductDetail from '../Component/ProductDetail'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {isMovePage} from '../store/Render'
import {useDispatch} from 'react-redux'
function DetailProduct(props) {
    const dispatch = useDispatch();
    const URL_API = process.env.REACT_APP_URL_API;
    const [dataProduct, setdataProduct] = useState(null);
    const {idproduct} = useParams();
    useEffect(() => {
        function fetchApiDataProduct(){
            axios.get(`${URL_API}/api/product/${idproduct}`).then(res=>{
            setdataProduct(res.data);
            })
         }
         fetchApiDataProduct();
         window.scrollTo(0,0);
    },[idproduct])
    useEffect(() => {
        window.scrollTo(0,0);
        dispatch(isMovePage());
    }, [])
    return (
        <div>
            <Breadcum title={'Product Detail'} breadcumList={['Home']}/>
            <ProductDetail data={dataProduct ? dataProduct : ''}/>
        </div>
    )
}

export default DetailProduct
