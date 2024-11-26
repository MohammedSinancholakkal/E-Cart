import { createSlice } from "@reduxjs/toolkit";


const wishListSlice = createSlice({
    name:"wishList",
    initialState:{
        wishList:[]
    },
    reducers:{
        addToWishlist:(state,action)=>{
            state.wishList.push(action.payload)
        },
        removeFromWishList:(state,action)=>{
            state.wishList=state.wishList.filter(item=> item.id!=action.payload)
        }

    }

})
export const {removeFromWishList} = wishListSlice.actions
export const {addToWishlist} = wishListSlice.actions
export default wishListSlice.reducer