import { useHistory } from "react-router-dom"

function Shop({gold, setGold, charHealth, setCharHealth}){
    let history = useHistory()

    function routeChange(){
        let path = '/map'
        history.push(path)
    }

    function buyHealth(){
        if(gold>=20){
            setGold(gold-20)
            if(charHealth<=50){
                setCharHealth(charHealth+50)
            }
            else{
                setCharHealth(100)
            }
        }
        else{
            alert("not enough gold")
        }
    }
    return(
        <div className="shopPage">
            <h1>Shop</h1>
            <div className="barHolder">
                <h2 className="randBar">gold: {gold}</h2>
                <h2 className="randBar">Health: {charHealth}/100</h2>
            </div>
            <img src={'https://img.freepik.com/free-vector/cartoon-style-cafe-front-shop-view_134830-697.jpg?size=626&ext=jpg&ga=GA1.2.2103491985.1627084800'}/>
            <br/>
            <button onClick={buyHealth}>Buy Potion</button>
            <button onClick={routeChange}>Leave</button>
        </div>
    )
}

export default Shop;