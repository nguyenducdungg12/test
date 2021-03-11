import React, { useEffect,useState } from 'react'
import ProductItem from '../Product/ProductItem'
import Pagination from '../Pagination/Pagination'
import {useSelector} from 'react-redux'
function ListProduct(props) {
    const page = useSelector(state => state.Page);
    const product_a_page =7;
    const {ListProduct} = props;
    function FilterProduct(arr,page,product_a_page){
        var content='';
        if(arr){
            var productFilter = arr.filter((item,stt)=>{
                return stt>=(page-1)*product_a_page && stt<=page*product_a_page;
            })
           content= productFilter.map((data,stt)=><ProductItem key={stt} data={data}/>);
        }
        return content;
    }
     return (
        <div className="ListProduct">
        <div className="container">
            <div className="row">
                <div className="col-12">           
                    <div className="row shop_container loadmore">
                       {ListProduct ? FilterProduct(ListProduct,page,product_a_page) : ''}
                    </div>
                </div>
                <div className="col-lg-12">
                    <Pagination totalProduct={ListProduct ? ListProduct.length : 1} product_a_page={product_a_page} currentPage={page}/>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ListProduct
