import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
const URL_API = process.env.REACT_APP_URL_API;

const getUser = createAsyncThunk('user/getUser',async(params,ThunkApi)=>{
    const user = axios.create({
        headers:{
            x_authorization:params,
        }
    });
    const dataApi = await user.get(`${URL_API}/api/user`);
    const data =dataApi.data;
        return data;
    
})
const sliceUser = createSlice({
    name:'User',
    initialState:null,
    reducers:{
        Logout : (state,action)=>{
            return null;
        },
      
    },
    extraReducers:{
        [getUser.fulfilled]: (state,action)=>{
           
            return {...action.payload};
        }
    }
})
export {getUser};   
export const {Logout,LoginFb} = sliceUser.actions;
export default sliceUser.reducer;