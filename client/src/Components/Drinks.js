import {React} from 'react'

// import components
import Drink from './Drink'

let Drinks = ({currentUser, drinks}) => {
  console.log(currentUser)
    // console.log(Object.values(drinks).map(drink => drink.name))

    // useEffect(() => {
    //   fetch('/drinks').then(res => {
    //     if(res.ok){
    //       res.json().then(data => setDrinks(data))
    //       console.log(drinks)
    //     } else {
    //       setDrinks([])
    //     }
    //   })
    // },[])

    return (
      <div className="drinks-div-container">
        <h1 className="drink-menu-header">CHOOSE YOUR DRINK</h1>
        <div className="drinks-menu-container">
          {drinks.map (drink => (<Drink drink={drink} currentUser={currentUser}/>))}
        </div>
      </div>
    )
}

export default Drinks