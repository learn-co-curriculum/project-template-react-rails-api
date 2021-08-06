import { useState } from 'react'
import { useHistory } from 'react-router-dom'

// import components
import Order from './Order'

let Cart = ({currentUser, order}) => {
    const history = useHistory()
    const [orderItem, setOrderItem] = useState([])
    const [tip, setTip] = useState(0)
    // console.log(order[0].drinks.map(order => order.price))
    // // setOrderItem(order.map(order => order.drinks))

    let subtotal = order[0].drinks.map(order => order.price).reduce((a,b) => a+b)
    let deliveryFees = 5
    let serviceFees = 10
    let otherFees = 3
    let tax =  order[0].drinks.map(order => order.price).reduce((a,b) => a+b)*0.2

    let handleChange = (e) => {
        setTip(e.target.value*subtotal)
    }

    let handleClick = () => {
        history.push('/drinks')
    }

    return (
        <div className="my-cart-container">
            <div>
                <form className="contact-info-form">
                    <div className="contact-info-user-details-card">
                        <h3>Contact Info</h3>
                        <label>First Name</label>
                        <input/>
                        <label>Last Name</label>
                        <input/>
                    </div>
                    <div className="contact-info-user-details-card">
                        <label>Email Address</label>
                        <input/>
                        <label>Phone Number</label>
                        <input/>
                        <p><small>You'll receive texts about your order. Contact info will be sent to DevBrother'sCoffee for order fullfillment.</small></p>
                    </div>
                </form>
                <form className="my-cart-order-form">
                    <div 
                    className="add-credit-card-selector-form-container">
                        <h3>Payment</h3>
                        <select className="credit-card-selector">
                            <option>Add Credit Card or Debit Card</option>
                            <option>Add Paypal</option>
                        </select>
                    </div>
                    <div className="card-number-container">
                        <div className="card-number-card">
                            <label>Card Number</label>
                            <input/>
                        </div>
                    </div>
                    <div className="card-information-container">
                        <div className="card-information-card">
                            <label>Expiration Date</label>
                            <input/>
                        </div>
                        <div className="card-information-card">
                            <label>CVV</label>
                            <input/>
                        </div>
                        <div className="card-information-card">
                            <label>Zip Code</label>
                            <input/>
                        </div>
                    </div>
                </form>
                <div></div>
                <div></div>
            </div>
            <div className="order-information-container">
                <div className="cart-edit-card">
                    <h5>Your Order From DevBrother's Coffee</h5>
                    <button className="edit-cart-button" onClick={handleClick}>Edit Cart</button>
                </div>
                <div className="cart-item-card">
                    {order[0].drinks.map(order => {
                        return (<Order order={order}/>)
                    })}
                    <div className="cart-fees-card">
                        <p><small>Subtotal</small></p>
                        <p>${subtotal}</p>
                    </div>
                    <div className="cart-fees-card">
                        <p><small>Delivery Fee</small></p>
                        <p>${deliveryFees}</p>
                    </div>
                    <div className="cart-fees-card">
                        <p><small>Service Fee</small></p>
                        <p>${serviceFees}</p>
                    </div>
                    <div className="cart-fees-card">
                        <p><small>Other Fees</small></p>
                        <p>${otherFees}</p>
                    </div>
                    <div className="cart-fees-card">
                        <p><small>Tax @ 20%</small></p>
                        <p>${tax}</p>
                    </div>
                    <div className="tip-container">
                        <div className="tip-selector-card">
                            <p><small>Tip</small></p>
                            <select className="order-selector-button" onChange={handleChange}>
                                <option value='0'>Cash</option>
                                <option value='0.15'>15%</option>
                                <option value='0.2'>20%</option>
                                <option value='0.35'>35%</option>
                                <option value='0.5'>50%</option>
                            </select>
                        </div>
                        <div>
                            <p>${tip}</p>
                        </div>
                    </div>
                </div>
                <div className="cart-total-card">
                    <h4>Total: ${subtotal + deliveryFees + serviceFees + otherFees + tax + tip} </h4>
                    <small>By continuing, you agree to DevBrothersCoffee's Terms of Service and to Yelp's Terms of Service and Privacy Policy. We'll send this Summary to DevBrothersCoffee.</small>
                    <button className="place-order-button">Place Order</button>
                </div>
            </div>
        </div>
    )
}

export default Cart