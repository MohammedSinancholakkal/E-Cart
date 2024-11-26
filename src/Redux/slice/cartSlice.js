import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            const existingProduct = state.find(item => item.id == action.payload.id)
            if(existingProduct){
                const remainingProduct = state.filter(item => item.id!= existingProduct.id)
                existingProduct.quantity++
                existingProduct.TotalPrice=existingProduct.price*existingProduct.quantity
                state=[...remainingProduct,existingProduct]

            }else{
                state.push({...action.payload,quantity:1,TotalPrice:action.payload.price})
            }
        },
        removeFromCart:(state,action)=>{
            return state= state.filter(item=>item.id!==action.payload)
        },
        emptyCart:(state)=>{
            return state=[]
        }
    }
})

export const {addToCart,removeFromCart}=cartSlice.actions
export default cartSlice.reducer