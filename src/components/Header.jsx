import React, { useEffect, useState } from 'react'
import { Badge, Container, Form, Nav, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchproduct } from '../Redux/slice/productslice'




function Header({insidehome}) {
  const dispatch = useDispatch()
  const [wishListCount,setWishListCount]=useState(0)
  const[cartCount,setCartCount]=useState(0)
  const {wishList} = useSelector(state => state.wishListReducer)
  const cart = useSelector((state)=> state.cartReducer)

  useEffect (()=>{
    setWishListCount(wishList.length)
    setCartCount(cart.length)

  },[wishList,cart])


  return (
    <>
     <Navbar expand="lg" className="bg-info">
      <Container>
        <Navbar.Brand>
          <Link to={'/'} style={{textDecoration:"none",color:"white", fontSize:"30xp" }}>
          <i class="fa-solid fa-truck-fast fa-beat-fade"></i> E-Cart
          </Link>
         </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        {insidehome&&<Form.Control
              type="text"
              placeholder="Search"
              className=" ms-5 w-25"
              onChange={e=>dispatch(searchproduct(e.target.value.toLowerCase()))}
            />}
          <Nav className="ms-auto">
            <Nav.Link href="#home">
                <Link to={"/wishlist"} style={{color:'white', textDecoration:'none', fontSize:'bolder'}}><i class="fa-solid fa-heart fa-beat" style={{color:'white'}}></i>  Wishlist
                <Badge bg='light rounded ms-2'>{wishListCount}</Badge></Link>
            </Nav.Link>
            <Nav.Link href="#link">
            <Link to={"/cart"} style={{color:'white', textDecoration:'none', fontSize:'bolder'}}><i class="fa-solid fa-cart-shopping fa-beat-fade" style={{color:'white'}}></i> Cart
            <Badge bg='light rounded ms-2'>{cartCount}</Badge></Link>
                
                </Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header