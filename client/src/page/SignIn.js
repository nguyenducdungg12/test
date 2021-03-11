import React,{useEffect} from 'react'
import Breadcum from '../Component/Breadcum'
import {Link} from 'react-router-dom'
import {withFormik} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import {toast} from 'react-toastify';
import {useDispatch} from 'react-redux';
import {isMovePage} from '../store/Render'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import GoogleLogin from 'react-google-login'; 
const FomilkForm = withFormik({
    mapPropsToValues(){
        return {
            name:'',
            password:'',
        }
    },
    validationSchema:Yup.object().shape({
        name:Yup.string().required('Tài khoản là bắt buộc').min(3,'Tài khoản phải có ít nhất 3 kí tự'),
        password:Yup.string().required('Mật khẩu là bắt buộc').min(6,'Mật khẩu phải có ít nhất 6 kí tự'),
    }),
    handleSubmit: (values,{props,resetForm})=>{  
        axios.post('http://localhost:5000/api/login',{
            userName:values.name,
            Password:values.password,
        }).then(res=>{
            if(res.data.msg){
                toast.error(res.data.msg, {
                    position: toast.POSITION.TOP_RIGHT
                  });               
                  resetForm();
            }
            else{
                localStorage.setItem('accessToken',res.data.accessToken);
                localStorage.setItem('refreshToken',res.data.refreshToken);
                toast.success('Đăng nhập thành công', {
                    position: toast.POSITION.TOP_RIGHT
                  }); 
                 props.history.push('/'); 
            }
        })
    }
})(SignIn);

function SignIn(props) {
    const dispatch = useDispatch();
    const URL_API = process.env.REACT_APP_URL_API;
    const {values,handleChange,handleSubmit} = props;
    useEffect(() => {
        window.scrollTo(0,0);
        dispatch(isMovePage());

    }, [])
    function responseFacebook(res){
        if(res.accessToken){
        axios.post(`${URL_API}/api/register`,res).then(resp=>{
            axios.post(`${URL_API}/api/login`,{
                userName:res.name,
                Password:'anhyeuem',
                idUserSocialMedia:res.userID
            }).then(respon=>{
                localStorage.setItem('accessToken',respon.data.accessToken);
                localStorage.setItem('refreshToken',respon.data.refreshToken);
                props.history.push('/'); 

            })
        });
    }
}
    return (
        <div>
             <Breadcum title='Đăng Nhập' breadcumList={['home']} />
             <div class="login_register_wrap register">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-6 col-md-10">
                            <div class="login_wrap">
                                <div class="register-wrap">
                                    <div class="heading_s1 mb-4">
                                        <h3>Đăng Nhập</h3>
                                    </div>
                                    <form onSubmit={handleSubmit}>
                                        <div class="form-group">
                                            <input type="text" onChange={handleChange} class="form-control" value = {values.name} name="name" placeholder="Nhập tài khoản" />
                                        </div>
                                        <div class="form-group">
                                            <input class="form-control" onChange = {handleChange} value={values.password} type="password" name="password" placeholder="Nhập mật khẩu" />
                                        </div>
                        
                                       
                                        <div class="form-group">
                                            <button type="submit" class="btn btn-primary btn-block p-3" name="register">Đăng nhập</button>
                                        </div>
                                    </form>
                                    <div class="different_login">
                                        <span> or</span>
                                    </div>
                                    <ul class="btn-login list_none text-center">

                                        <FacebookLogin
                                        appId="886311855544772"
                                        fields="name,email,picture"
                                        scope="public_profile,user_friends"
                                        callback={responseFacebook}
                                        render={RenderProps=>(
                                            <li onClick={RenderProps.onClick}><a href="#" class="btn btn-facebook"><i class="ion-social-facebook"></i>Facebook</a></li>
                                        )}
                                        />
                                    </ul>
                                    <div style={{color:'#687188'}} class="form-note text-center mt-4">Don't Have an Account? <Link style={{fontWeight:700}}to="/register">Register</Link></div>
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
