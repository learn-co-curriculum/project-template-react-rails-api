import {useEffect} from 'react'
import {useHistory} from 'react-router-dom'

//import react components
import Drinks from './Drinks'
import Beans from './Beans'

let Home = ({currentUser, drinks, beans, order, setCurrentUser, setDrinks, setBeans, setOrder}) => {
    const history = useHistory()

    useEffect(() => {
        fetch('/user').then(res => {
          if(res.ok){
            res.json().then(user => {
              setCurrentUser(user)
    
              fetch('/orders').then(res => {
                if(res.ok){
                  res.json().then(orders => {
                    let currentUserOrders = orders.filter(order => order.user_id === user.id)
                    let currentOrder = currentUserOrders.filter(order => order.current_order === true)
                    console.log(user)
                    console.log(orders)
                    setOrder(currentOrder)
                  })
                }
              })
    
              if (user.cart === null) {
                console.log('created cart')
                createCart(user)
              }
    
          })
          } else {
            setCurrentUser(null)
          }
        })
      },[])

    useEffect(() => {
        fetch('/drinks').then(res => {
          if(res.ok){
            res.json().then(data => setDrinks(data))
          } else {
            setDrinks([])
          }
        })
      },[])
      
      useEffect(() => {
        fetch('/beans').then(res => {
          if(res.ok){
            res.json().then(data => setBeans(data))
          } else {
            setDrinks([])
          }
        })
      },[])

      
    let createCart = async (user) => {
        const res = await fetch('/carts', {
            method: 'POST', 
            headers: {'Content-type' : 'application/json'}, 
            body: JSON.stringify({user_id: user.id})
        })
        const orderData = await res.json()
        console.log(orderData)
    }

    let handleBeansClick = () => {
        console.log('i am working')
        history.push('/beans')
    }

    let handleDrinksClick = () => {
        console.log('i am working')
        history.push('/drinks')
    }

    let handleCartClick = () => {
        console.log('i am working')
        history.push('/my_cart')
    }

    let handleBrewMethodClick = () => {
        console.log('i am working')
        history.push('/brew_methods')
    }

    let handleStoryClick = () => {
        console.log('i am working')
        history.push('/our_story')
        
    }
    

    return (
        <div className="home-container">
            <div className="menu-container">
                <div className="drinks-menu-card">
                    <div className="drinks-menu-description"></div>
                    <div className="drinks-button-container">
                        <button className="home-navigation-button" onClick={handleDrinksClick}>Order drinks</button>
                    </div>
                </div>
                <div className="beans-menu-card" >
                    <div className="beans-menu-description">

                    </div>
                    <div className="beans-button-container">
                        <button className="home-navigation-button" onClick={handleBeansClick}>Order beans</button>
                    </div>
                </div>
            </div>
            <div className="cart-container">
                <button className="home-navigation-button" onClick={handleCartClick}>View my cart</button>
            </div>
            <div className="brew-method-story-container">
                <div className="brew-method-card">
                    <button className="home-navigation-button" onClick={handleBrewMethodClick}>View brew methods</button>
                </div>
                <div className="coffee-story-card">
                    <button className="home-navigation-button" onClick={handleStoryClick}>View our coffee story</button>
                </div>
            </div>
        </div>
    )
}

export default Home