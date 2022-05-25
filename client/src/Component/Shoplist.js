import React from 'react'
import {useEffect} from 'react'

function Shoplist() {
  useEffect(()=> {
    fetch('/shopping_lists')
    .then(res => res.json())
    .then(data => console.log(data))
  },[])
  return (
    <div>Shoplist</div>
  )
}

export default Shoplist