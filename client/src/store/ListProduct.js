import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import CallApi from '../helper/CallApi'
const URL_API = process.env.REACT_APP_URL_API;

const getListProduct = createAsyncThunk('Product/ListProduct',async (params,thunkApi)=>{
    const {sort,search,category} = params;
    var dataListProduct = await CallApi(`${URL_API}/api/products?${sort ? `sort=${sort}` : ''}${search ? `&query=${search}` : ''}${category ? `&category=${category}` :''}`,'get');
    return dataListProduct.data;
})

const listProduct = createSlice({
    name:'listProduct',
    initialState :null,
    reducers:{ 
    },
    extraReducers:{
        [getListProduct.fulfilled]: (state,action)=>{
            return [...action.payload];
        }
    }
})

export  {getListProduct};
export default listProduct.reducer;