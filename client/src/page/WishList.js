import React,{useEffect,useState} from 'react'
import Breadcum from '../Component/Breadcum'
import WishList from '../Component/WishList'
import {useSelector,useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import CallApi from '../helper/CallApi'
import {isMovePage} from '../store/Render'
function DetailCart() {
    const dispatch = useDispatch();
    const URL_API = process.env.REACT_APP_URL_API;
    const history = useHistory();
    const [listwish, setlistwish] = useState(null);
    const [Render, setRender] = useState(false);
    const User = useSelector(state => state.User);
    useEffect(() => {
       if(!User){
            history.push('/signin');
       }
       else{
           const responApi = CallApi(`${URL_API}/api/user/wishlist`,'get');
            responApi.then((res)=>setlistwish(res.data));
       }
    },[User,Render])
    useEffect(() => {
        window.scrollTo(0,0);
        dispatch(isMovePage());

    }, [])
    function RenderWishList(){
        setRender(!Render);
    }
    return (
        <div className='Wishlist'>
            <Breadcum title='Wish List' breadcumList={['Home']}/>
            <div className="Wishlist-Detail">
                <div className="container">
                   <WishList dataWishList={listwish} RenderWishList={RenderWishList}/>
                </div>
            </div>
        </div>
    )
}

export default DetailCart
