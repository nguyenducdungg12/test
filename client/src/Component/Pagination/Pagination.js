import React from 'react'
import {useDispatch} from 'react-redux'
import {pageCurrent} from '../../store/Page'
function PaginationItem(props){
    const {numberPage,currentPage} = props;
    const dispatch = useDispatch();
    function onChangePage(e){
        e.preventDefault();
        dispatch(pageCurrent(numberPage));
    }
    return(
        <li className={`page-item ${currentPage == numberPage ? 'active' : ''}` }>
            <a href='#' className='page-link' onClick={onChangePage}>
              {numberPage}
              </a>
        </li>
    )
}

function Pagination(props) {
    const dispatch = useDispatch();
    const {totalProduct,product_a_page,currentPage} = props;
    var totalPage = Math.ceil(totalProduct/product_a_page);
    const indexFirstPage = (parseInt(currentPage/10)*10)== 0 ? 1 : (parseInt(currentPage/10)*10);
    const indexLastPage = indexFirstPage+9 >totalPage ? totalPage : indexFirstPage+9;
    function onPreviousPage(e){
        e.preventDefault();
        if(currentPage<=1){
            return;
        }
        dispatch(pageCurrent(currentPage-1))
    }
    function onNextPage(e){
        e.preventDefault();
        dispatch(pageCurrent(currentPage+1))

    }
    function generatePaginationItem(number){
        var content=[];
        content.push(<li key={'321321dsadsaddsadsadsad'}className={`page-item ${currentPage<=1 ? 'disabled' :''}`}onClick={onPreviousPage}>
        <a href='#' className='page-link'>
            Previous
        </a>
       </li>)
       if(totalPage>=9){

       }
        for(var i=indexFirstPage;i<=indexLastPage;i++){
            content.push(<PaginationItem key={i} numberPage={i} currentPage={currentPage}/>)
        }
        content.push(<li key={'321321dsadsad'}className={`page-item ${currentPage==totalPage ? 'disabled' :''}`}>
        <a href='' className='page-link' onClick={onNextPage}>
            Next
        </a>
       </li>)
        return content;
    }
    return (
        
        <ul className="pagination mt-5 justify-content-center">
             {generatePaginationItem(totalPage)}
             <li className="page-item">     
          </li>
        </ul>
    )
}

export default Pagination
