function StockCard ({stock}) {
    const {DisplayName, Symbol, LastValue} = stock
    // console.log(stock)

    return(
        <div>
            <div>{DisplayName}</div>
            <div>{Symbol}</div>
            <div>{LastValue}</div>
        </div>
    )
}

export default StockCard