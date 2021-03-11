import axios from 'axios'

const CallApi = (url,method,data)=>{
    var temp = axios.create({
        headers:{
        x_authorization:localStorage.getItem('accessToken') || '',}
    });
    return temp({
        method:method,
        url:url,
        data:data,
    })
}

export default CallApi;