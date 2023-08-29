import React from 'react'
import '../style/card.css'

const card = (props) => {
    const {item,handleCart}=props
  return (
      <div className="card">
        <div className="photo">
            <img src={item.img} alt="shop_pic" />
        </div>
        <div className="text">
            <span>{item.title} </span>
            <span>{item.author}</span>
            <span>Price : {item.price}Rs</span>
        </div>
        <button className='btn' onClick={()=>{handleCart(item)}}>Add to Cart</button>
      </div>
  )
}

export default card
