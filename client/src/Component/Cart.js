import React from 'react'
import {useEffect, useState} from 'react'
import CartItem from './CartItem'

function Cart() {

  const [cartitem, setCartItem] = useState([])

   useEffect(()=> {
     fetch("/cart")
     .then(res => res.json())
     .then(data => setCartItem(data))
   },[])

   console.log(cartitem)

   const mappedItem = cartitem?.map(item => {
     return <CartItem key={item} item={item}/>
   })

  return (
    <div>
      {mappedItem}
      <button>Generate Prices and Location</button>
    </div>
  )
}

export default Cart