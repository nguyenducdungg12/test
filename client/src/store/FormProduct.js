import {createSlice} from '@reduxjs/toolkit'

const formProductSlice = createSlice({
    name:'formProductSlice',
    initialState :{
        isOpenForm:false,
        data:null,
    },
    reducers:{
        UpdateProduct : (state,action)=>{
            state.isOpenForm=true;
            state.data=action.payload;
        },
        OpenForm : (state,action)=>{
            state.isOpenForm=true;
            state.data=null;
        },
        CloseForm : (state,action)=>{
            state.isOpenForm=false;
            state.data=null;
        }
        
    }
})

export const {UpdateProduct,OpenForm,CloseForm } = formProductSlice.actions;
export default formProductSlice.reducer;