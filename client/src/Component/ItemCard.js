import React from 'react'
import { useState } from 'react'
import '../Style/ItemCard.css'
import ModalCards from './ModalCards'

function ItemCard({food,  findMatchingItem}) {
  const [modal, setModal] = useState(false)
  const [matchingItem, setMatchingItem] = useState(null)
  
   


  function findMatchingItem(){
    setModal(prev => !prev)
    fetch('/find_items',{
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: food.name})
    })
    .then(res => res.json())
    .then(data => setMatchingItem(data))
  }  

  

  function close(){
    setModal(prev => !prev)
    setMatchingItem(null)
  }

  const mappeditem = matchingItem?.map(item => {
    return <ModalCards key={item.id} item={item}/>
  })

    


    
    return (
      <>
        <div className='each-item'>
          <div className='item-content'>
            <h3>{food.name}</h3>
            <img src={food.image} alt={food.name} /><br />
            <button onClick={findMatchingItem}>Find Matching Items</button>
          </div>
        </div>

        {modal ? 
          <div className="modal-background-mask">
            <div className='modal'>
              <p className="close" onClick={close}>x</p>
              {mappeditem}
            </div>
          </div>
        : 
        null}

        
      </>
  )
}

export default ItemCard
// function addToCart(){
//   fetch('/items',{
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({name: food.name, image: food.image })
//   })
//   .then(res => res.json())
//   .then(data => {
//     fetch('/shopping_list_items',{
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({item_id: data.id})
//     })
//     .then(res => res.json())
//     .then(data => console.log(data))
//   })
// }