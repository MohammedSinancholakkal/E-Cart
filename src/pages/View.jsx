import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../Redux/slice/wishListSlice'




function View() {

  const {id}=useParams() //can handle path related information form components
  const [product,setProduct]=useState({})
  const {wishList} = useSelector(state => state.wishListReducer)
  const cart = useSelector((state) => state.cartReducer)

  const dispatch = useDispatch()
  
    useEffect(()=>{
      if(localStorage.getItem("allproduct")){
        const allproducts=JSON.parse(localStorage.getItem("allproduct"))
        setProduct(allproducts.find(item=>item.id==id))
      }
    })
console.log(product);

const handleWishList = (product)=>{
  const existingproduct = wishList.find(item=> item.id == product.id)
  if(existingproduct){
    alert("Product Allready Exists")
  }else{
    dispatch(addToWishlist(product))
  }
}

const handleCart=(product)=>{
  const existingproduct = cart.find(item=>item.id == product.id)
  if(existingproduct){

    alert("items added")
    dispatch(addToCart(product))

  }else{

    alert("item added")
    dispatch(addToCart(product))

  }
}


  return (
      <>
     <Header insidehome/>
      <div className="container mt-5 row ms-5">
        <div className="col-lg-4">
          <img width={"400px"}  height={"300px"} src={product?.thumbnail} alt="" />
        </div>
        <div className="col-lg-2"></div>
        <div className="col-lg-6">
          <p>{product?.id}</p>
          <h1>{product?.title}</h1>
          <p>{product?.description}.</p>
            <h3>Price: <span className='text-danger'>${product?.price}</span></h3>
            <div className="d-flex justify-content-between">
            <Button className='btn btn-light bg-info text-light' onClick={()=>handleWishList(product)}><i class="fa-solid fa-heart fa-beat" style={{color:"white"}}></i> Wishlist</Button>
            <Button  className='btn btn-light bg-info text-light'  onClick={() => handleCart(product)}><i class="fa-solid fa-cart-plus fa-beat-fade" style={{color:"white"}}></i> Cart</Button>
            </div>

        </div>

      </div></>
  )
}

export default View