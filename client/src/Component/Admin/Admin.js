import React,{useEffect} from 'react'
import {Switch,Route,useRouteMatch,Link } from 'react-router-dom'
import Account from './AdminComponent/AdminAccount'
import Product from './AdminComponent/AdminProduct'
import AdminUser from './AdminComponent/AdminUser'
import DashBoard from './AdminComponent/DashBoard'
import './Admin.css'
import logo from '../../asset/image/logo.png'
import {useSelector,useDispatch} from 'react-redux';
import {isMovePage} from '../../store/Render'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Admin(props) {
    const dispatch = useDispatch();
    const User = useSelector(state => state.User);
    let {path} = useRouteMatch();
    useEffect(()=>{
        if(!User){
            props.history.push('/')
        }
        else if(!User.isAdmin){
            props.history.push('/')

        }
        dispatch(isMovePage());
    })
    return (
        <div className="admin">
            <div className="admin-sidebar">
                <div className="admin-sidebar-logo">
                    <img src={logo} alt="" className="admin-sidebar-login-img"/>
                </div>
                <div className="admin-sidebar-nav">
                        <Link to={`${path}/notification`} className='admin-sidear-nav-item'>
                        <i class="fas fa-bell"></i>
                        <span>BẢNG ĐIỀU KHIỂN</span>
                        </Link>
                        <Link to={`${path}/product`} className='admin-sidear-nav-item'>
                        <i class="fas fa-bell"></i>
                        <span>SẢN PHẨM</span>
                        </Link>
                        <Link to={`${path}/user`} className='admin-sidear-nav-item'>
                        <i class="fas fa-bell"></i>
                        <span>NGƯỜI DÙNG</span>
                        </Link>
                        <Link to={`${path}/account`} className='admin-sidear-nav-item'>
                        <i class="fas fa-bell"></i>
                        <span>TÀI KHOẢN</span>
                        </Link><Link to={`/`} className='admin-sidear-nav-item'>
                        <i class="fas fa-bell"></i>
                        <span>HOME</span>
                        </Link>
                 
                </div>
            </div>
            <div className="admin-main">
                    <Switch>
                        <Route path={`${path}/notification` }component={DashBoard}/>
                        <Route path={`${path}/product`} component={Product}/>
                        <Route path={`${path}/user`} component={AdminUser}/>
                        <Route path={`${path}/account`} component={Account}/>
                    </Switch>
            </div>
            <ToastContainer autoClose={2000} position="bottom-right"/>
        </div>
    )
}

export default Admin
