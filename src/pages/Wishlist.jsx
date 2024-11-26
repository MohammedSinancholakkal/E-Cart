import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import {removeFromWishList} from'../Redux/slice/wishListSlice'
import { addToCart } from '../Redux/slice/cartSlice'



function Wishlist() {

  const {wishList} = useSelector(state => state.wishListReducer)
  const dispatch = useDispatch()
  const handleCart=(product)=>{
    dispatch(addToCart(product))
    dispatch(removeFromWishList(product?.id))
  }
  


  return (
    <>
    <Header insidehome/>
    <div style={{marginTop:"50px"}} className='container-fluid'>
   <Row>
    {
     wishList?.length>0?wishList.map(product =>(
      <Col>
      <Card style={{ width: '18rem' }}>
   <Card.Img variant="top" height={"220px"} width={"100%"} src={product?.thumbnail} />
   <Card.Body>
     <Card.Title>{product?.Title}</Card.Title>
     <Card.Text>
     {product?.description}
     </Card.Text>
     <div className='d-flex justify-content-between' >
       <Button className='btn btn-light bg-info' onClick={()=>dispatch(removeFromWishList(product?.id))}><i class="fa-solid fa-trash fa-beat" style={{color:"white"}}></i></Button>
       <Button  className='btn btn-light bg-info' onClick={()=>handleCart(product)}><i class="fa-solid fa-cart-plus fa-beat-fade" style={{color:"white"}}></i></Button>
     </div>
   </Card.Body>
 </Card>
     </Col>
     )):<div className='d-flex'>
      <img width={"500px"} height={"300px"}  src="https://i.pinimg.com/originals/5a/d0/47/5ad047a18772cf0488a908d98942f9bf.gif" alt="" />
      <h2 className='text-center mt-5'>Your WishList Is Empty!!</h2>
     </div>
}
   </Row>
  
</div>
    </>
  )
}

export default Wishlist