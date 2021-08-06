import {React, useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
let Drink = ({drink, currentUser}) => {
    let findCurrentOrder = currentUser.orders.find(order => order.current_order===true)
    const history = useHistory()
    const [currentOrder, setCurrentOrder] = useState({
        id: "",
        user_id: "", 
        cart_id: "",
        current_order: true
    })

    const [orderItem, setOrderItem] = useState({
        order_id: "",
        item_id: "",
        item_type: "Drink"
    })

    useEffect(()=> {
        setCurrentOrder({
            id: findCurrentOrder.id,
            user_id: currentUser.id,
            cart_id: currentUser.cart.id
        })
    },[])

    let handleOrderItem = (drinkID) => {
        console.log(findCurrentOrder.id)
        console.log(drinkID)

        setOrderItem({
            order_id: currentOrder.id,
            item_id: drinkID,
            item_type: "Drink", 
        })
    }

    let createOrder = async () => {
        const res = await fetch('/orders', {
            method: 'POST', 
            headers: {'Content-type' : 'application/json'}, 
            body: JSON.stringify(currentOrder)
        })
        const orderData = await res.json()
        console.log(orderData)
    }

    let createOrderItem = async () => {
        const res = await fetch('/order_items', {
            method: 'POST', 
            headers: {'Content-type' : 'application/json'}, 
            body: JSON.stringify(orderItem)
        })
        const orderItemData = await res.json()
        console.log(orderItemData)
    }


    let handleAddToCart = (e) => {
        let drinkID=parseInt(e.target.parentElement.id)
        console.log(drinkID)

        if (findCurrentOrder===undefined) {
            console.log('no current order. creating an order')
            handleOrderItem(drinkID)
            createOrder()
            createOrderItem()
            console.log('success! added item to new order')
        } else {
            console.log('current order found')
            handleOrderItem(drinkID)
            createOrderItem()
            console.log('success! added item to order')
        }
    }

    let handleCustomize = () => {
        console.log('hello i am working')
        history.push('/customize_drink')
    }

    return (
        <div className="drink-container">
            <div>
                <img className="drinks-image" src={drink.img_url} alt={`img of ${drink.name}`}/>
            </div>
            <div id={drink.id} className="drink-info">
                <h3>{drink.name}</h3>
                <p>{drink.description}</p>
                <button className="drink-button" onClick={handleAddToCart}>Add to cart</button>
                <button className="drink-button" onClick={handleCustomize}>Customize</button>
            </div>
        </div>
    )
}

export default Drink