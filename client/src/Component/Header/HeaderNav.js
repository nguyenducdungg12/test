import React,{useState,useEffect} from 'react'
import CartHeader from './CartHeader'
import {useSelector,useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'

function HeaderNav() {
   const dispatch = useDispatch();
   const isRender = useSelector(state => state.Render);
   const history = useHistory();
   const [dropdownSearch, setdropdownSearch] = useState(false);
   const [dropdownMenu, setdropdownMenu] = useState(false);
   const [fixNav, setfixNav] = useState(false)
   const [contentSearch, setcontentSearch] = useState('');
   useEffect(()=>{
      window.addEventListener('scroll',function(e){
         if(window.scrollY>130){
            setfixNav(true);
         }
         else{
            setfixNav(false);
         }
      })
   },[]);
   useEffect(() => {
      setdropdownSearch(false);
      setdropdownMenu(false);
   }, [isRender])
   function onChangeSearch(e){
      setcontentSearch(e.target.value);
   }
   function onSearch(e){
      e.preventDefault();
      history.push(`/search?query=${contentSearch}`);
      setcontentSearch('');
   }
   function onDropdownMenu(){
      setdropdownMenu(!dropdownMenu);
   }
    return (
        <div className={`header__navbar ${fixNav ? 'fix-nav' : ''}`}>
            <div className="container">
               <div className="header__navbar__content">
                  <div className="header__navbar__content__logo">
                     <Link to ='/'>
                     <img className="header__navbar__content__logo__img" src="https://bestwebcreator.com/shopwise/demo/assets/images/logo_dark.png" alt=""/>
                     </Link>
                  </div>
                  <div className="header__navbar__wrap">
                     
                     <ul className="header__navbar__content__list" style={dropdownMenu ? {transform:'scaleY(1)'} : {}}>
                        <li className="header__navbar__content__item active">
                           
                           <Link to='/' className="header__navbar__content__item__name">
                           home
                           </Link>
                        </li>
                        <li className="header__navbar__content__item">
                           <Link to='/category/men-clothing'className="header__navbar__content__item__name">
                           Đồ Nam
                           </Link>
                        
                        </li>
                        <li className="header__navbar__content__item">
                           <Link to='/category/women-clothing'className="header__navbar__content__item__name">
                        Đồ Nữ
                           </Link>
                        </li>
                        <li className="header__navbar__content__item">
                           <Link to='/category/jewelery'className="header__navbar__content__item__name">
                        Vòng Cổ
                           </Link>
                        
                        </li>
                        <li className="header__navbar__content__item">
                           <Link to='/category/electronics'className="header__navbar__content__item__name">
                           Đồ Điện Tử
                           </Link>
                        
                        </li>
                        <li className="header__navbar__content__item">
                           <Link to='/contact'className="header__navbar__content__item__name">
                        Liên Hệ
                           </Link>
                        </li>
                     </ul>
                        <div className="header__navbar__content__item header__navbar__content__item--search">
                           <i className="fas fa-search header__navbar__content__item--icon" onClick={()=>setdropdownSearch(!dropdownSearch)}></i>
                           <div className="header__navbar__content__item__search__dropdown" style={dropdownSearch ? {transform:'scaleY(1)'} : {transform:'scaleY(0)'}}>
                              <div className="container">
                                 <form className="header__navbar__content__item__search__dropdown__wrap" onSubmit={onSearch}>
                                 <input type="text" className="header__navbar__content__item__search__input" value = {contentSearch} onChange={onChangeSearch} placeholder='Nhập từ khóa cần tìm kiếm'/>
                                 <button className="header__navbar__content__item__button__search">
                                    Tìm Kiếm
                                 </button>
                                 </form>
                              </div>
                           </div>
                        </div>
                        <CartHeader/>
                        <div className="header__navbar__menu__icon" onClick={onDropdownMenu}>
                           <i className="fas fa-bars"></i>
                     </div>
                  </div>
               </div>
            </div>
         </div>
    )
}

export default HeaderNav
