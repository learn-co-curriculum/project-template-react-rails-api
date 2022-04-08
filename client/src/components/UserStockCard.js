function UserStockCard ({stock, handleDeleteStock}) {
    const {name, symbol, price, performance_over_time, sector, id} = stock

    function handleDelete () {
        fetch(`/user_stocks/${id}`, {
            method: "DELETE"
        })
        .then(r => {
           handleDeleteStock(id)
        })
    }

    return(
        <div >
            <div>Name: {symbol} - {name} </div>
            <div>Price: ${price}</div>
            <div>Price Change Since Yesterday: $ {performance_over_time}</div>
            <div>Sector: {sector}</div>
            <button className="button" onClick={handleDelete}>Delete Stock</button>
        </div>
    )
}

export default UserStockCard