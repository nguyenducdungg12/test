import {createSlice} from '@reduxjs/toolkit'

const pageSlice = createSlice({
    name:'pageSlice',
    initialState : 1,
    reducers:{
       pageCurrent: (state,action)=>{
           const page = action.payload;
            return page;
       }
    }
})

export const { pageCurrent } = pageSlice.actions;
export default pageSlice.reducer;