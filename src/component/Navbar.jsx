import React from 'react'
import '../style/Navbar.css'

const Navbar = ({size,setShow}) => {
  return (
      <nav>
        <div className="navbar">
            <div className="text"><h1 onClick={()=>{setShow(true)}}>Ark Shop</h1></div>
            <div className='icon'>
            <i className="fa-solid fa-cart-plus" onClick={()=>{setShow(false)}}></i>
            <span>{size}</span>
            </div>
        </div>
      </nav>
  )
}

export default Navbar
