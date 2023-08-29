import React, { useEffect, useState } from 'react'

const Cart = ({ cart ,setCart,handleClick}) => {
    const [price, setPrice] = useState(0)
    const handleRemove=(id)=>{
        let arr=cart.filter((item)=> item.id!==id);
        setCart(arr);
    }
    const handlePrice=()=>{
        let ans=0;
        cart.map((item)=>{
        return ans+= item.amount * item.price;

        });
        setPrice(ans);
      }
    
      useEffect(()=>{
        handlePrice();
        console.log("Effect Fired")
      })
    return (
        <div>
            {cart.map((item) => {
                return (
                    <div className='cart' key={item.id}>
                        <div className="image_box">
                            <img src={item.img} alt="" />
                            <h3>{item.title}</h3>
                            <span>Price:{item.price}</span>
                        </div>
                        <div className="btn">
                            <button onClick={() => { handleClick(item,-1) }}>-</button>
                            <span>{item.amount}</span>
                            <button onClick={() => { handleClick(item,1) }}>+</button>
                            <button onClick={() => { handleRemove(item.id) }}>Remove</button>
                        </div>
                    </div>
                )
            })}
            <div className="total">
                <span>Total Price of Your Cart:</span>
                <span>{price}</span>
            </div>
        </div>
    )
}

export default Cart
