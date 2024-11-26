import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import {removeFromCart} from"../Redux/slice/cartSlice"
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'




function Cart() {

  const cart = useSelector((state)=> state.cartReducer)
  const dispatch = useDispatch()
  const[total,setTotal]=useState(0)

  useEffect(()=>{
    if(cart?.length>0){
      setTotal(cart?.map(product => product?.TotalPrice).reduce((p1,p2) =>p1+p2))

    }else{
      setTotal(0)

    }

  },[cart])

  return (
    <>
    <Header/>
    {
      cart?.length>0?(       
      <div className="row container">
      <div className="col-lg-1"></div>
      <div className="col-lg-7">
        <div className='table shadow mt-5'>
          <table className='w-100'>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Image</th>
              <th>Quantity</th>
              <th>price</th>
              <th>action</th>
            </tr>
           {
            cart?.map((product,index)=>(
              <tr>
              <td>{index+1}</td>
              <td>{product?.title}</td>
              <td><img width={"250px"}  height={"200px"} src={product?.thumbnail} alt="" /> </td>
              <td><input type="text" readOnly value={product.quantity}/></td>
              <td>${product?.TotalPrice}</td>
              <td> <button onClick={()=>dispatch(removeFromCart(product?.id))}  className='btn btn-light'  ><i class="fa-solid fa-trash fa-beat" style={{color:"red"}}></i></button></td>
            </tr>
           ))
           }
          </table>
          <div className='d-flex justify-content-between p-3'>
            <button className='btn btn-danger'>Empty Cart</button>
            <Link to={'/'} className="">
            <Button className=' btn-success'> Shop More</Button></Link>
         

          </div>
       </div>
    </div>
    <div className="col-lg-1"></div>
    <div className="col-lg-3">
      <div className="card shadow rounded mt-5 p-5 w-100">
        <h2 className='text-dark fw-bolder fs-3'>Cart Summary</h2>
        <h3 className='text-dark'>Total Price: <span className='text-danger fw-bolder'>${total}</span></h3>
      </div>
      <div className="d-grid">
        <button className='btn btn-info mt-2 fw-bolder'>Checkout</button>
      </div>
    </div>
    
  </div> 
      ):<div className='d-flex'>
      <img width={"500px"} height={"300px"}  src="https://i.pinimg.com/originals/5a/d0/47/5ad047a18772cf0488a908d98942f9bf.gif" alt="" />
      <h2 className='text-center mt-5'>Your Cart Is Empty!!</h2>
     </div>
     }    
    </>
  )
}

export default Cart