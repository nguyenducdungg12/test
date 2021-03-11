import React,{useEffect,useRef} from 'react'
import { useParams,useHistory } from 'react-router-dom'
import Breadcum from '../Component/Breadcum'
import {useDispatch,useSelector} from 'react-redux'
import ListProducts from '../Component/ListProduct/ListProduct'
import {pageCurrent} from '../store/Page'
import {isMovePage} from '../store/Render'
import {getListProduct} from '../store/ListProduct'
import queryString from 'query-string'

function ListProduct(props) {
    const DefaultSelected = useRef(null);
    const dispatch = useDispatch();
    const ListProduct = useSelector(state => state.ListProduct);
    let { category } = useParams();
    var {query} = queryString.parse(useHistory().location.search)
    if(category){
        category = category.replace('-',' ');
    }
    useEffect(() => {
      dispatch(pageCurrent(1));
      if(query){
          dispatch(getListProduct({
            search:query,
          }))
      }
      else{
        dispatch(getListProduct({
            category:category,
          }))
      }
      window.scrollTo(0,0);
      dispatch(isMovePage());
      DefaultSelected.current.value=0;
    },[category,query]);
    function onSort(e){
        dispatch(getListProduct({
            category:category,
            sort:e.target.value,
            search:query,
        }))
    }
    return (
        <div>
            <Breadcum title={query ? `Tìm Kiếm : ${query}` : category.replace('-', ' ')} breadcumList={['Home']} />
            <div className="container">
                <div className="row align-items-center mb-4 pb-1 mt-4">
                        <div className="col-12">
                            <div className="product_header">
                                <div className="product_header_left">
                                    <div className="custom_select">
                                        <select className="form-control form-control-sm" onChange={onSort} defaultValue={0} ref={DefaultSelected}>
                                            <option value={0}>Sắp xếp </option>
                                            <option value={1} onClick={onSort} >Giá tăng</option>
                                            <option value={-1} onClick={onSort} selected={'selected'}>Giá giảm</option> 
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            {ListProduct && <ListProducts ListProduct={ListProduct}/>}
        </div>
    )
}

export default ListProduct
