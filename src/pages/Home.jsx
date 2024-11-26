import React, { useEffect } from "react"
import { Button, Card, Col, Row, Spinner } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { fetchProducts } from '../Redux/slice/productslice'
import Header from '../components/Header'
import { addToWishlist } from "../Redux/slice/wishListSlice"
import { addToCart } from "../Redux/slice/cartSlice"


function Home() {
   const dispatch =useDispatch()
   const{allproducts,loading,error}=useSelector(state=>state.productReducer)
   const {wishList} = useSelector(state => state.wishListReducer)
   const cart = useSelector((state) => state.cartReducer)



   useEffect(()=>{
    dispatch(fetchProducts())
   },[])


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
    
    <Header insidehome  />
    <div style={{marginTop:"50px"}} className='container-fluid'>
      {
        loading?<div className='text-center mt-5'>
      <Spinner animation="border" variant="info" />
        </div>:
        <Row>
          { allproducts?.length>0?allproducts.map(product=>(

        
          <Col key={product?.id}>
      
    <Card style={{ width: '16rem'}} className='m-3'>
     <Link to={`/view/${product?.id}`}> <Card.Img variant="top" src={product?.thumbnail} />
     </Link>
      <Card.Body>
        <Card.Title className='text-danger fw-bolder'>{product?.title.slice(0,10)}...</Card.Title>
        <Card.Text>
        {product?.description.slice(0,20)}...
        </Card.Text>
        <div className='d-flex justify-content-between'>
        <Button className='btn btn-light'  onClick={()=>handleWishList(product)}><i class="fa-solid fa-heart" ></i></Button>
        <Button className='btn btn-light'  onClick={() => handleCart(product)}><i class="fa-solid fa-cart-shopping"></i></Button>
        </div>

      </Card.Body>
    </Card></Col>
      )):<p className='text-danger'>Nothing to Display</p>
    }
</Row>}
</div></>
)}



   
  


export default Home