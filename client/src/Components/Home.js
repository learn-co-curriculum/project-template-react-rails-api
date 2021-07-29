import {useHistory} from 'react-router-dom'


let Home = () => {
    const history = useHistory()
    let handleBeansClick = () => {
        console.log('i am working')
        history.push('/beans_menu')
    }

    let handleDrinksClick = () => {
        console.log('i am working')
        history.push('/drinks_menu')
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
                    <button className="home-navigation-button" onClick={handleDrinksClick}>Order drinks</button>
                </div>
                <div className="beans-menu-card" >
                    <button className="home-navigation-button" onClick={handleBeansClick}>Order beans</button>
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