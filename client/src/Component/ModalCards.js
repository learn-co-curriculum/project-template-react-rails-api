import React from 'react'
import '../Style/ItemCard.css'
function ModalCards({item}) {

    function addToCart(){
        fetch('/items',{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({name: item.name, price: item.price, store: item.store })
        })
        .then(res => res.json())
        .then(data => {
            fetch('/shopping_list_items',{
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({item_id: data.id})
              })
              .then(res => res.json())
              .then(data => console.log(data))
        })
      }

  return (
    <div className = 'modal-content'>
        <p>{item.name}</p>
        <p>${item.price}</p>
        <p>Store: {item.store}</p>
        <button onClick={addToCart}>Click here</button>
    </div>
  )
}

export default ModalCards