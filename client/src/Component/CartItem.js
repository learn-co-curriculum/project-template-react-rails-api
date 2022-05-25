import React from 'react'

function CartItem({item}) {
   
  return (
    <div>
        <p>{item.item.name}</p>
        <img src={item.item.image}/>
        <p>{item.item.price}</p>
        <p>{item.item.quantity}</p>
    </div>
  )
}

export default CartItem