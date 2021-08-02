import { useEffect, useState } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'

// import react components
import SignUp from "./SignUp";
import Login from "./Login";
import Logout from './Logout'
import Navbar from "./Navbar/Navbar";
import Home from "./Home";
import Drinks from './Drinks'
import CustomizeDrink from './CustomizeDrink.js'
import Cart from './Cart'

let App = () => {
  const [currentUser, setCurrentUser] = useState({
    id: 0,
    username: "", 
    address: "", 
    cart: {},
    email_address: "",
    orders: []
  })

  const [drinks, setDrinks] = useState()
  const history = useHistory()
  const [order, setOrder] = useState({
    drinks: []
  })

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
                console.log(currentUserOrders)
                console.log(user)
                console.log(currentOrder)
                setOrder(currentOrder)
              })
            }
          })
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

  // useEffect(() => {
  //   fetch('/orders').then(res => {
  //     if(res.ok){
  //       res.json().then(orders => {
  //         let currentUserOrders = orders.filter(order => order.user_id === currentUser.id)
  //         let currentOrder = currentUserOrders.filter(order => order.current_order === true)
  //         console.log(orders)
  //         console.log(currentUser)
  //         setOrder(currentOrder)
  //       })
  //     }
  //   })
  // },[])

  

  // use the code below for Error: Objects are not valid as a React child (found: object with keys {id, username, address, email_address}). If you meant to render a collection of children, use an array instead.
  // Object.values(user).map(user => setCurrentUser(user)

  if (currentUser === null) {
    history.push('/login')
    return (
      <div>
        <Navbar
          // currentUser={currentUser}
          // setCurrentUser={setCurrentUser}
          />
        <div className="App">
            <Switch>
              <Route exact path='/login'>
                <Login setCurrentUser={setCurrentUser}/>
              </Route>
              <Route exact path='/signup'>
                <SignUp setCurrentUser={setCurrentUser}/>
              </Route>
            </Switch>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <Navbar 
          // currentUser={currentUser}
          // setCurrentUser={setCurrentUser}
        />
        <div className="App">
            <Switch>
              <Route exact path='/login'>
                <Login setCurrentUser={setCurrentUser}/>
              </Route>
              <Route exact path='/signup'>
                <SignUp setCurrentUser={setCurrentUser}/>
              </Route>
              <Route exact path="/logout">
                <Logout setCurrentUser={setCurrentUser}/>
              </Route>
              <Route exact path="/drinks">
                <Drinks 
                  currentUser={currentUser}
                  drinks={drinks}
                />
              </Route>
              <Route exact path="/customize_drink">
                <CustomizeDrink currentUser={currentUser}/>
              </Route>
              <Route exact path="/my_cart">
                <Cart 
                  currentUser={currentUser}
                  order={order}
                />
              </Route>
              <Route exact path='/'>
                <Home currentUser={currentUser}/>
              </Route>
            </Switch>
        </div>
      </div>
    )
  }
}

export default App;
