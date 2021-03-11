import React,{useState,useEffect} from 'react'
import ProductItem from './ProductItem'
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios';
import {getListProduct} from '../../store/ListProduct'

function ProductTab() {
   const dispatch = useDispatch();
   const ListProduct = useSelector(state => state.ListProduct)
   const [category, setcategory] = useState(1);
   useEffect(()=>{
      var type='';
      switch (category) {
         case 1:
            type='men clothing';
            break;
         
         case 2:
            type='women clothing';
            break;
         
         case 3:
            type='jewelery';
            break
         
         case 4:
            type='electronics';
            break;
         default:
            break;
      }
      dispatch(getListProduct({category:type}));
   },[category])
   function ContentProduct(data){
      var content;
      if(data){
         var filterData = data.filter((item,stt)=>stt<8);
         content=filterData.map((item,stt)=><ProductItem key={stt} data={item}/>)
      }
      return content;
   }
   function onChangeCategory(e){
         var number = parseInt(e.target.getAttribute('data-id'));
         setcategory(number);
   }
    return (
        <div className="product__ExclusiveProduct">
                <h3 className="product__ExclusiveProduct__title">
                   exclusive products
                </h3>
                <ul className="product__exclusiveProduct__category">
                   <li className={category==1 ? "product__exclusiveProduct__category__item active" : "product__exclusiveProduct__category__item"}  data-id="1" onClick={onChangeCategory}>
                      Đồ Nam
                   </li>
                   <li className={category==2 ? "product__exclusiveProduct__category__item active" : "product__exclusiveProduct__category__item"} data-id="2" onClick={onChangeCategory}>
                     Đồ Nữ
                   </li>
                   <li className={category==3 ? "product__exclusiveProduct__category__item active" : "product__exclusiveProduct__category__item"} data-id="3" onClick={onChangeCategory}>
                     Vòng Cổ
                   </li>
                   <li className={category==4? "product__exclusiveProduct__category__item active" : "product__exclusiveProduct__category__item"} data-id="4" onClick={onChangeCategory}>
                     Đồ Điện Tử
                   </li>
                </ul>
                <div className="product__exclusiveProduct__table active_product">
                    <div className="product__exclusiveProduct__table__list">
                       <div className="container">
                          <div className="row">
                             {ListProduct ? ContentProduct(ListProduct) : ''}
                          </div>
                       </div>
                    </div>
                 </div>                  
             </div>
    )
}

export default ProductTab
