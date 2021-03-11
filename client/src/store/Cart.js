import {createSlice, current} from '@reduxjs/toolkit'
import findIndex from '../asset/FindIndex'
const CartSlice = createSlice({
    name:'cartSlice',
    initialState : {
        listCart : [],
        totalPrice:0,
    },
    reducers:{
        AddCartProduct : (state,action)=>{
            const product = {...action.payload};
            const index = findIndex([...current(state).listCart],product._id);
            if(index==-1){
                if(!product.quantity){
                    product.quantity=1;
                }
                state.listCart.push(product);
                state.totalPrice+=product.price*product.quantity;
            }
            else{
                if(!product.quantity){
                    state.listCart[index].quantity++;
                }
                else{
                    state.listCart[index].quantity+=product.quantity;
                }
                state.totalPrice+=product.price*state.listCart[index].quantity;

            }        
            state.totalPrice = Math.round(state.totalPrice*100)/100;
        },
        RemovieCartProduct : (state,action)=>{
            const id = action.payload;
            const index =  findIndex([...current(state).listCart],id);
            var cartItem = {...state.listCart[index]};
            state.totalPrice-=cartItem.price*cartItem.quantity;
            state.totalPrice = Math.round(state.totalPrice*100)/100;
            state.listCart.splice(index,1);
        }, 
        IncreaseQuantity: (state,action)=>{
            const id = action.payload;
            const index =  findIndex([...current(state).listCart],id);
            if(index!=-1){  
                var cartItem = state.listCart[index];
                cartItem.quantity++;
                state.totalPrice+=cartItem.price;
            }
            state.totalPrice = Math.round(state.totalPrice*100)/100;
        },
        DecreaseQuantity:(state,action)=>{
            const id = action.payload;
            const index =  findIndex([...current(state).listCart],id);
            if(index!=-1){  
                var cartItem = state.listCart[index];
                cartItem.quantity--;
                state.totalPrice-=cartItem.price;
            }
            state.totalPrice = Math.round(state.totalPrice*100)/100;
        }
    }
})
export const {AddCartProduct,RemovieCartProduct,IncreaseQuantity,DecreaseQuantity} = CartSlice.actions;
export default CartSlice.reducer;