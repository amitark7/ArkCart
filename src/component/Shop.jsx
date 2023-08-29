import React from 'react'
import list from './list'
import Card from './Card'
import '../style/card.css'


const shop = ({handleCart}) => {
  return (
    <div className='shop'>
      {list.map((item)=>{
        return <Card item={item} key={item.id} handleCart={handleCart}/>
      })}
    </div>
  )
}

export default shop
