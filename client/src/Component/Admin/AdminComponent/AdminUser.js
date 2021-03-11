import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {toast} from 'react-toastify'
import CallApi from '../../../helper/CallApi'
function AdminProductItem(props){
    const URL_API = process.env.REACT_APP_URL_API;
    const dispatch = useDispatch();
    const {AvatarPath,userName,Gender,Phone,Age,_id,isAdmin} = props.data;
    const {isReRender} = props;
    function onDeleteToken(){
        CallApi(`${URL_API}/api/user/${_id}/removeToken`,'post').then((res)=>{
            toast.success(res.data.msg);
        })
    }
    function onDeleteUser(){
        CallApi(`${URL_API}/api/user/${_id}`,'delete').then((res)=>{
            toast.success(res.data.msg);
            isReRender();
        })
    }
    function onUpadatedAdmin(){
        CallApi(`${URL_API}/api/user/${_id}/authorization`,'post').then((res)=>{
            console.log(res);
            toast.success(res.data.msg);
            isReRender();
        })
    }
    return(
        <tr>
        <td class="product-thumbnail"><a href="#"><img src={AvatarPath} alt="product1" /></a></td>
        <td class="product-name" data-title="Product"><a href="#">{userName}</a></td>
        <td class="product-price" data-title="Price">{Age}</td>
        <td class="product-price" data-title="Price">{Phone}</td>
        <td class="product-stock-status" data-title="Stock Status"><span class="badge badge-pill badge-success">{Gender}</span></td>
        <td class="product-add-to-cart"><a href="#" class="btn btn-primary" onClick={onDeleteToken}>DeleteToken</a></td>
       {!isAdmin&& <td class="product-add-to-cart"><a href="#" class="btn btn-primary" onClick={onUpadatedAdmin}>Cấp quyền Admin</a></td>}
        <td class="product-remove" data-title="Remove"><a href="#" class="btn btn-danger" onClick={onDeleteUser}> Xóa</a></td>
    </tr>
    )
} 
function AdminProduct() {
    const dispatch = useDispatch();
    const [isReRender, setisReRender] = useState(false);
    const [User, setUser] = useState(null);
    const ListProduct = useSelector(state => state.ListProduct)
    useEffect(() => {
        async function getAllUsers(){
            const users = await CallApi('http://localhost:5000/api/users','get');
            setUser(users.data);
        }
        getAllUsers();
    }, [isReRender])
    function ShowProduct(arr){
        let content=[];
        if(arr){
            content = arr.map((data,stt)=><AdminProductItem key={stt} data={data} isReRender={render}/>)
        }
        return content;
    }
    function render(){
        setisReRender(!isReRender);
    }
    return (
        <div className='AdminProduct'>
            <div className="container">
                <h2 className="admin-title">
                    Thông tin người dùng
                 </h2>
                <div className="AdminProduct-list">
                    <div class="row">
                        <div class="col-12">
                            <div class="table-responsive wishlist_table">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th class="product-thumbnail">Hình Ảnh</th>
                                            <th class="product-name">Tên người dùng</th>
                                            <th class="product-price">Tuổi</th>
                                            <th class="product-stock-status">Số diện thoại</th>
                                            <th class="product-add-to-cart">Giới tính</th>
                                            <th class="product-add-to-cart">Token</th>
                                            <th class="product-remove" >Cấp quyền</th>
                                            <th class="product-remove" >Remove</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                       {User && ShowProduct(User)}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminProduct
