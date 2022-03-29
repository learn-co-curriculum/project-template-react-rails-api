
function ShoppingCart ({ cartItems, onAdd, onRemove, menuItems}) {
    //struggling with delivery fee, need item we clicked on or restaurant deliv fee from menuItems

    const allItemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0)
    const taxPrice = allItemsPrice * .08
    const totalPrice = allItemsPrice + taxPrice 

    return (
        
        <>
            <h2>Shopping Cart</h2>
            <div>
                {cartItems.length === 0 && <div>Cart is empty</div>}
                {cartItems.map((item) => (
                    <div key={item.id} className="row">
                    <div className="col-2">{item.name}</div>
                    <div className="col-2">
                      <button onClick={() => onRemove(item)} className="remove">
                        -
                      </button>{' '}
                      <button onClick={() => onAdd(item)} className="add">
                        +
                      </button>
                    </div>
        
                    <div className="col-2 text-right">
                      {item.qty} x ${item.price.toFixed(2)}
                    </div>
                  </div>
                ))}

        {cartItems.length !== 0 && (
            <>
                <hr></hr>
                <div className="row">
                <div className="col-2">Items Price</div>
                <div className="col-1 text-right">${allItemsPrice.toFixed(2)}</div>
                </div>
                {/* <div className="row">
                <div className="col-2">Delivery Fee</div>
                <div className="col-1 text-right">
                    ${delivery_fee}
                </div>
                </div> */}

                <div className="row">
                <div className="col-2">
                    <strong>Total Price including tax</strong>
                </div>
                <div className="col-1 text-right">
                    <strong>${totalPrice.toFixed(2)}</strong>
                </div>
                </div>
                <hr />
                <div className="row">
                <button onClick={() => alert('Order Submitted')}>
                    Checkout
                </button>
                </div>
            </>
        )}
            </div>
        </>
    )
}

export default ShoppingCart