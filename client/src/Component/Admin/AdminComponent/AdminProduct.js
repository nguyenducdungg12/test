import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getListProduct} from '../../../store/ListProduct'
import {withFormik} from 'formik';
import {toast} from 'react-toastify'
import * as Yup from 'yup'
import CallApi from '../../../helper/CallApi'
import {UpdateProduct,OpenForm,CloseForm } from '../../../store/FormProduct'

const FomilkForm = withFormik({
    mapPropsToValues(props){
        const {data} = props;
        return {
            title:data ? data.title: '',
            price:data ? data.price : '',
            category:data ? data.category :'',
            description:data ? data.description :'',
        }
    },
    validationSchema:Yup.object().shape({
        title:Yup.string().required('Tài khoản là bắt buộc'),
        price:Yup.string().required('Tài khoản là bắt buộc'),
        category:Yup.string().required('Tài khoản là bắt buộc'),
        description:Yup.string().required('Tài khoản là bắt buộc'),
    }),
    handleSubmit:(values,{props,resetForm})=>{
        const {onCloseFormAdd,data} = props;
        const URL_API = process.env.REACT_APP_URL_API;
        var formData = new FormData();
        console.log(values);
        formData.append('image',values.imagePath); 
        formData.append('category',values.category); 
        formData.append('description',values.description); 
        formData.append('price',values.price); 
        formData.append('title',values.title); 
        console.log(data);
        if(data){
            formData.append('_id',data._id); 
        }
            CallApi(`${URL_API}/api/product`,'post',formData).then(res=>{
                if(res.data.msgID==1){
                    toast.error(res.data.msg)
                   }
                else{
                    toast.success(res.data.msg, {
                      });  
                      onCloseFormAdd();
                      resetForm();
                   }
                
            })
     
    }
})(AddProduct);
function AdminProductItem(props){
    const dispatch = useDispatch();
    const {imagePath,title,price,category,_id} = props.data;
    const {isReRender} = props;
    
    function onUpdateProduct(){
        dispatch(UpdateProduct({...props.data}))
    }
    function onDeleteProduct(){
        const URL_API = process.env.REACT_APP_URL_API;
        CallApi(`${URL_API}/api/product/${_id}`,'delete').then(res=>{
            if(res.data.msgID==1){
                toast.error(res.data.msg)
               }
            else{
                toast.success(res.data.msg, {
                  });               
                  isReRender();
               }
        })
    }
    return(
        <tr>
        <td class="product-thumbnail"><a href="#"><img src={imagePath} alt="product1" /></a></td>
        <td class="product-name" data-title="Product"><a href="#">{title}</a></td>
        <td class="product-price" data-title="Price">${price}</td>
        <td class="product-stock-status" data-title="Stock Status"><span class="badge badge-pill badge-success">{category}</span></td>
        <td class="product-add-to-cart"><a href="#" class="btn btn-primary" onClick={onUpdateProduct}>Sửa</a></td>
        <td class="product-remove" data-title="Remove"><a href="#" class="btn btn-danger" onClick={onDeleteProduct}> Xóa</a></td>
    </tr>
    )
} 
function AddProduct(props){
    const dispatch = useDispatch();
    const {data} = props;
    const {values,handleChange,setFieldValue,handleSubmit,onCloseFormAdd} = props;
    return (
        <form onSubmit={handleSubmit}>
            <div class="form-group">
                <label for="exampleFormControlInput1">Tên sản phẩm</label>
                <input type="text" class="form-control" value={ values.title } onChange = {handleChange} name='title'id="exampleFormControlInput1" placeholder="Áo phông"/>
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput2">Gía</label>
                <input type="number" class="form-control" value={ values.price} onChange = {handleChange} name='price' id="exampleFormControlInput2" placeholder="10"/>
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Mô tả sản phẩm</label>
                <textarea class="form-control" value={ values.description} onChange = {handleChange} name='description' id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="form-group">
                <label for="exampleFormControlSelect3">Thế loại</label>
                <select class="form-control" id="exampleFormControlSelect3" value={values.category} onChange = {handleChange} value={values.category} name='category'>
                     <option value=''>Chọn thế loại</option>
                    <option value='men clothing'>men clothing</option>
                    <option value='women clothing'>women clothing</option>
                    <option value='jewelery'>jewelery</option>
                    <option value='electronics'>electronics</option>
                </select>
            </div>
            <div class="form-group">
                <label for="exampleFormControlFile4">Hình ảnh</label>
                <input type="file" name='imagePath'  accept="image/*"  onChange = {(event)=>setFieldValue('imagePath',event.target.files[0])} class="form-control-file" id="exampleFormControlFile4"/>
            </div>
            <div style={{textAlign:'center'}}>
            <button type="submit" class="btn btn-primary mb-2">{data ? 'Sửa' : "Thêm"}</button>
            <button class="btn btn-secondary mb-2 ml-5" onClick={onCloseFormAdd}>Hủy</button>
            </div>
    </form>
    )
}
function AdminProduct() {
    const dispatch = useDispatch();
    const [isReRender, setisReRender] = useState(false);
    const ListProduct = useSelector(state => state.ListProduct)
    const {isOpenForm,data} = useSelector(state=>state.FormProduct)
    useEffect(() => {
        dispatch(getListProduct({}));
    }, [isOpenForm,isReRender])
    function ShowProduct(arr){
        let content=[];
        if(arr){
            content = arr.map((data,stt)=><AdminProductItem key={stt} data={data} isReRender={render}/>)
        }
        return content;
    }
    function onOpenFormAdd(){
        dispatch(OpenForm());
    }
    function onCloseFormAdd(){
        dispatch(CloseForm());
    }
    function render(){
        setisReRender(!isReRender);
    }
    return (
        <div className='AdminProduct'>
            <div className="container">

                <h2 className="admin-title">
                    Sản phẩm
                 </h2>
                <div className="admin-control">
                    <button className="admin-controll-add btn btn-primary" onClick={onOpenFormAdd}>
                        Thêm sản phẩm
                </button>
                </div>
                <div className="AdminProduct-list">
                    <div class="row">
                        <div class="col-12">
                            {isOpenForm ? 
                            <FomilkForm onCloseFormAdd={onCloseFormAdd} data={data}/>
                            :
                            <div class="table-responsive wishlist_table">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th class="product-thumbnail">Hình Ảnh</th>
                                            <th class="product-name">Title</th>
                                            <th class="product-price">Price</th>
                                            <th class="product-stock-status">Stock Status</th>
                                            <th class="product-add-to-cart">Sửa</th>
                                            <th class="product-remove" >Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                       {ShowProduct(ListProduct)}
                                    </tbody>
                                </table>
                            </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminProduct
