import {createSlice} from '@reduxjs/toolkit'

const modalSlice = createSlice({
    name:'modalSlice',
    initialState : {
        isOpenModal : false,
        imagePath : null,
    },
    reducers:{
        openModal : (state,action)=>{
            state.isOpenModal = true;
            state.imagePath = action.payload;
            
        },
        closeModal: (state,action)=>{
            state.isOpenModal = false;
        }
    }
})

export const { openModal , closeModal } = modalSlice.actions;
export default modalSlice.reducer;