import {createSlice} from '@reduxjs/toolkit'

const renderSlice = createSlice({
    name:'renderSlice',
    initialState : {
        isOpenModal : false,
        imagePath : null,
    },
    reducers:{
        isMovePage : (state,action)=>{
            return !state;
        },
      
    }
})

export const {isMovePage } = renderSlice.actions;
export default renderSlice.reducer;