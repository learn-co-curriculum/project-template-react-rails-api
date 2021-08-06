import {React} from 'react'
import {useHistory} from 'react-router-dom'

// import components
import Drink from './Drink'

let Drinks = ({currentUser, drinks}) => {
  const history = useHistory()

  let handleClick = () => {
    history.push('/')
  }
    return (
      <div className="drinks-div-container">
        <h1 className="drink-menu-header">CHOOSE YOUR DRINK</h1>
        <div className="drinks-menu-container">
          {drinks.map (drink => (<Drink drink={drink} currentUser={currentUser}/>))}
        </div>
        <button onClick={handleClick}>Go back</button>
      </div>
    )
}

export default Drinks