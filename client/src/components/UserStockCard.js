function UserStockCard ({stock}) {
    const {name, symbol, price, performance_over_time, sector} = stock


    return(
        <div >
            <div>Name: {symbol} - {name} </div>
            <div>Price: ${price}</div>
            <div>Price Change Over One Day: $ {performance_over_time}</div>
            <div>Sector: {sector}</div>
        </div>
    )
}

export default UserStockCard