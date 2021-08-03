import {React, useState} from 'react'
import {useHistory} from 'react-router-dom'
let Drink = ({drink, currentUser}) => {
    const history = useHistory()
    const [order, setOrder] = useState({
        user_id: "",
        cart_id: "", 
        drink_id: "", 
        bean_id: "", 
        current_order: false
    })

    const [selectDrink, setSelectDrink] = useState({
        name: "",
        img_url: "", 
        milk: "",
        sugar: false, 
        iced: false, 
        size: "", 
        price: "", 
        quantity: ""
    })

    let findCurrentOrder = () => {
        if (currentUser.orders.find(order => order.current_order===true) === undefined) {
            return false
        } else {
            let currentOrder = currentUser.orders.find(order => order.current_order===true)
            console.log(currentOrder)
            return currentOrder
        }
    }


    let handleOrder = ([selectDrink,drinkID]) => {
        console.log(selectDrink)
        setOrder({
            user_id: currentUser.id,
            cart_id: currentUser.cart.id, 
            drink_id: drinkID, 
            bean_id: 0,
            current_order: true
        })

        console.log(order)
    }

    let createCart = async () => {
        const res = await fetch('/user/cart', {
            method: 'POST',
            headers: {'Content-type' : 'application/json'}, 
            body: JSON.stringify({user_id: currentUser.id})
        })

        const cartData = await res.json()
        console.log(cartData)
    }

    let createOrder = async () => {
        const res = await fetch('/orders', {
            method: 'POST', 
            headers: {'Content-type' : 'application/json'}, 
            body: JSON.stringify(order)
        })
        const orderData = await res.json()
        console.log(orderData)
    }

    let updateOrder = async () => {
        console.log(currentUser.orders)

        const res = await fetch(`/order/${currentUser.order.id}`, {
            method: 'PATCH',
            headers: {'Content-type':'application/json'}, 
            body: JSON.stringify(order)
        })

        const orderData = await res.json()
        console.log(orderData)
    }

    let addDrinkToState = async (drinkID) => {
        const res = await fetch (`/drink/${drinkID}`)

        const drinkData = await res.json()
        if (drinkData !== null) {
            setSelectDrink({
                name: drinkData.name,
                img_url: drinkData.img_url, 
                milk: drinkData.milk,
                sugar: false, 
                iced: false, 
                size: drinkData.size, 
                price: drinkData.price, 
                quantity: drinkData.quantity
            })

        } else {
            console.log('error in response')
        }
    }

    let handleAddToCart = (e) => {
        let drinkID=parseInt(e.target.parentElement.id)
        console.log(drinkID)
        addDrinkToState(drinkID)

        if (currentUser.cart === null) {
            console.log('Creating a cart')
            createCart()
            handleOrder([selectDrink,drinkID]);
            createOrder(order)
            console.log('success!!')
     
        } else if (findCurrentOrder() === false) {
            console.log('Creating order')
            handleOrder([selectDrink,drinkID])
            console.log(selectDrink)
            console.log(order)
            createOrder()
            console.log('success!!')
        } else {
            console.log('Adding to current order')
            handleOrder([selectDrink,drinkID])
            updateOrder()
            console.log('success!!')
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