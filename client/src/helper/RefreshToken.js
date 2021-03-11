import axios from 'axios'
const URL_API = process.env.REACT_APP_URL_API;
const refreshToken = (refreshToken)=>{
    return axios.post(`${URL_API}/api/refreshToken`,{
        data:refreshToken,
    });
}
export default refreshToken;