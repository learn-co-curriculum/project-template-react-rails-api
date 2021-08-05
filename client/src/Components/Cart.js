import { useState } from 'react'

// import components
import Order from './Order'

let Cart = ({currentUser, order}) => {
    const [orderItem, setOrderItem] = useState([])
    // console.log(order[0].drinks)
    // setOrderItem(order.map(order => order.drinks))

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
                    <button className="edit-cart-button">Edit Cart</button>
                </div>
                <div className="cart-item-card">
                    {order[0].drinks.map(order => {
                        return (<Order order={order}/>)
                    })}
                    {/* <Order drinks={order[0].drinks} order={order}/> */}
                    <p><small>Subtotal</small></p>
                    <p><small>Delivery Fee</small></p>
                    <p><small>Service Fee</small></p>
                    <p><small>Other Fees</small></p>
                    <p><small>Tax</small></p>
                    <div className="tip-container">
                        <div className="tip-selector-card">
                            <p><small>Tip</small></p>
                            <select className="order-selector-button">
                                <option>Cash</option>
                                <option>15%</option>
                                <option>20%</option>
                                <option>35%</option>
                                <option>50%</option>
                            </select>
                        </div>
                        <div>
                            <p>$1</p>
                        </div>
                    </div>
                </div>
                <div className="cart-total-card">
                    <h4>Total: </h4>
                    <small>By continuing, you agree to DevBrothersCoffee's Terms of Service and to Yelp's Terms of Service and Privacy Policy. We'll send this Summary to DevBrothersCoffee.</small>
                    <button className="place-order-button">Place Order</button>
                </div>
            </div>
        </div>
    )
}

export default Cart