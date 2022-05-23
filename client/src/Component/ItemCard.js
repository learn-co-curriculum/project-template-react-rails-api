import React from 'react'

function ItemCard({food}) {
    console.log(food)

    function queryfood(){
      
    }

  function addToCart(){
    fetch('/items',{
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: food.name, image: food.image })
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
    <div>
        <h3>{food.name}</h3>
        <img src={food.image} alt={food.name}/><br/>
        <button onClick={addToCart}>Add to Cart</button>
    </div>
  )
}

export default ItemCard