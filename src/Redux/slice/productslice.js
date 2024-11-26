import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const  fetchProducts = createAsyncThunk("products/fetchProducts",async()=>{
    const result = await axios.get("https://dummyjson.com/products")
    localStorage.setItem("allproduct",JSON.stringify(result.data.products))
    return result.data.products
})



const productslice= createSlice({
    name:"products",
    initialState:{
        allproducts:[],
        allproductsDummy:[],
        loading:false,
        error:""
    },
    reducers:{
    searchproduct:(state,action)=>{
        state.allproducts=state.allproductsDummy.filter(item=>item.title.toLowerCase().includes(action.payload))
    }

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.allproducts=action.payload
            state.allproductsDummy=action.payload
            state.loading=false
            state.error=""
        })
        builder.addCase(fetchProducts.pending,(state,action)=>{
            state.allproducts=[]
            state.loading=true
            state.error=""
        })
        builder.addCase(fetchProducts.rejected,(state,action)=>{
            state.allproducts=[]
            state.loading=false
            state.error="API Call Failed..."
        })
    }
})

export const {searchproduct}=productslice.actions

export default productslice.reducer