import React,{useEffect} from 'react'
import Breadcum from '../Component/Breadcum'
import {Link} from 'react-router-dom'
import {withFormik} from 'formik';
import * as Yup from 'yup'
import axios from 'axios'
import {isMovePage} from '../store/Render'
import { toast } from 'react-toastify'
import {useDispatch} from 'react-redux'
const FomilkForm = withFormik({
    mapPropsToValues(){
        return {
            username:'',
            password:'',
            phone:'',
            age:'',
            gender:'Name',
        }
    },
    validationSchema:Yup.object().shape({
        username:Yup.string().required('Tài khoản là bắt buộc').min(3,'Tài khoản phải có ít nhất 3 kí tự'),
        password:Yup.string().required('Mật khẩu là bắt buộc').min(6,'Mật khẩu phải có ít nhất 6 kí tự'),
    }),
    handleSubmit:(values,{props,resetForm})=>{
        const URL_API = process.env.REACT_APP_URL_API;
        var formData = new FormData();
        formData.append('image',values.image); 
        formData.append('userName',values.username); 
        formData.append('Password',values.password); 
        formData.append('Phone',values.phone); 
        formData.append('Age',values.age); 
        formData.append('Gender',values.gender); 
        axios.post(`${URL_API}/api/register`,formData).then((res)=>{
           if(res.data.msgID==2){
            toast.success(res.data.msg, {
                position: toast.POSITION.TOP_RIGHT
              });
              props.history.push('/signin');
           }
           else{
            toast.error(res.data.msg, {
                position: toast.POSITION.TOP_RIGHT
              });               
              resetForm();
           }
         
        })
    }
})(Register);


function Register(props) {
    const dispatch = useDispatch();
    const {values,handleChange,errors,handleSubmit,setFieldValue} = props;
    useEffect(() => {
        window.scrollTo(0,0);
        dispatch(isMovePage());

    }, [])
    return (
        <div>
            <Breadcum title='Đăng Ký' breadcumList={['home']} />
            <div className="login_register_wrap register">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-md-10">
                            <div className="login_wrap">
                                <div className="register-wrap">
                                    <div className="heading_s1 mb-4">
                                        <h3>Đăng Ký</h3>
                                    </div>
                                    <form method='POST' onSubmit={handleSubmit}>
                                        {errors.username&&<div className="alert alert-danger" role="alert">{errors.username}</div>}
                                        <div className="form-group">
                                            <input type="text" className="form-control" onChange={handleChange} value={values.username} name="username" placeholder="Nhập tài khoản" />
                                        </div>
                                        {errors.password&&<div className="alert alert-danger" role="alert">{errors.password}</div>}
                                        <div className="form-group">
                                            <input className="form-control" type="password" onChange={handleChange} value={values.password} name="password" placeholder="Nhập mật khẩu" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" onChange={handleChange} value={values.phone} name="phone" placeholder="Nhập số điện thoại" />
                                        </div>
                                        <div className="form-group">
                                            <input type="number" className="form-control" onChange={handleChange} value={values.age} name="age" placeholder="Nhập số tuổi" />
                                        </div>
                                        <div className="form-group" >
                                            <h4>Giới Tính</h4>
                                            <div className="form-group">
                                                <input id='nu'type="radio" name='gender' value='Nam' defaultChecked/>
                                                <label htmlFor="nu">Nam</label>
                                            </div>
                                            <div className="form-group">
                                                <input id='name'type="radio" name='gender' value='Nữ'/>
                                                <label htmlFor="nam">Nữ</label>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <h4> Tải lên hình ảnh</h4>
                                            <input type='file' name='image' accept="image/*" onChange={(event)=>setFieldValue('image',event.target.files[0])}/>
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-primary btn-block p-3" name="register">Register</button>
                                        </div>
                                    </form>
                                    <div className="different_login">
                                        <span> or</span>
                                    </div>
                                    <ul className="btn-login list_none text-center">
                                        <li><a href="#" className="btn btn-facebook"><i className="ion-social-facebook"></i>Facebook</a></li>
                                        <li><a href="#" className="btn btn-google"><i className="ion-social-googleplus"></i>Google</a></li>
                                    </ul>
                                    <div style={{color:'#687188'}}className="form-note text-center mt-4">Already have an account? <Link style={{fontWeight:700}}to="/Signin">Log in</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FomilkForm
