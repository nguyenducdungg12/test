import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import dotenv from 'dotenv'
import {Logout} from '../../store/User';
import {Link} from 'react-router-dom'
import {getUser} from '../../store/User' 
import freshToken from '../../helper/RefreshToken'
function HeaderTop(props) {
   console.log(process.env.REACT_APP_URL_API);
   const dispatch = useDispatch();
   const isRender = useSelector(state => state.Render);
   const [userDropdown, setuseDropdown] = useState(false)
   const user = useSelector(state => state.User)
   const urlImage = process.env.REACT_APP_URL_API;
   function DropdownUser(){
      setuseDropdown(!userDropdown);
   }
   function onLogout(e){
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      dispatch(Logout());
   }
   useEffect(() => {
      setuseDropdown(false);
      if(user){
         if(user.err && user.err.message=='jwt expired'){
              async function refreshToken(){
                 var tokenFresh = localStorage.getItem('refreshToken');
                  var newAccessToken = await freshToken(tokenFresh);
                 localStorage.setItem('accessToken',newAccessToken.data.accessToken);
                 dispatch(getUser(newAccessToken.data.accessToken)); 
              }
             refreshToken();
            
           }
        }
   }, [isRender,user])
    return ( 
        <div className="header__top">
            <div className="container">
               <div className="header__top__contact">
                  <div className="header__top__contact__left">
                     <div className="header__top__contact__language">
                        <img src="https://previews.123rf.com/images/ihorsw/ihorsw1703/ihorsw170300054/73429371-flag-of-united-kingdom-uk-england-trendy-britain-flat-vector-illustration-british-symbol-.jpg" alt=""/>
                        <div className="header__top__contact__language__name">
                           <span className="header__top__contact__language__name__text">
                           English
                           </span>
                           <i className="fas fa-chevron-down"></i>
                        </div>
                     </div>
                     <div className="header__top__contact__coin">
                        <span className="header__top__contact__coin__text">
                        USD
                        </span>
                        <i className="fas fa-chevron-down"></i>
                     </div>
                     <div className="header__top__contact__Phone-Number">
                        <i className="fas fa-mobile-alt"></i>
                        <span className="header__top__contact__Phone-Number__text">
                        123-456-7890
                        </span>
                     </div>
                  </div>
                  <div className="header__top__list__right">
                     {user ? 
                     <div className="header__user">
                        <img src={user&&user.isSocialMedia ?user.AvatarPath :`${urlImage+user.AvatarPath}`} className="header__user__img"/>
                        <p className="header__user__name">
                           {user.userName}
                        </p>
                        <ul className="header__user__dropdown" >
                              <i className="fas fa-caret-down" onClick={DropdownUser}></i>
                              <div className="header__user__dropdown--wrap" style={userDropdown ? {display:'flex'} : {display:'none'}}>
                                 <Link to='/user/wishlist'className="header__user__dropdown--link">
                                    Danh sách mua
                                 </Link>
                                 <Link to='/setting' className="header__user__dropdown--link">
                                    Cài đặt
                                 </Link>
                                 {
                                    user.isAdmin && <Link to='/admin/product' className="header__user__dropdown--link">
                                    Admin
                                  </Link> 
                                 }
                                 <Link to='/' className="header__user__dropdown--link" onClick={onLogout}>
                                   Đăng xuất
                                 </Link>
                              </div>
                        </ul>
                     </div>
                     :
                     <div className="header__top__item">
                        <i className="fas fa-user-alt" ></i>
                        <Link to='/signin'className="header__top__item__text">
                        Đăng Nhập
                        </Link>
                     </div> 
                     
                  }
                  </div>
               </div>
            </div>
         </div>
    )
}

export default HeaderTop
