import {useState} from 'react'

let Order = ({order}) => {
    const [quantity, setQuantity] = useState(1)

    let handleChange = (e) => {
        console.log(e.target.value)
        setQuantity(e.target.value)
    }

    return (
        <div className="order-details-container">
            <div className="order-details-card">
                <img className="coffee-order-thumbnail" src={order.img_url} alt='picture of coffee'/>
                <p><small>{order.name}</small></p>
                <select className="order-selector-button" onChange={handleChange}>
                    <option value="1">1x</option>
                    <option value="2">2x</option>
                    <option value="3">3x</option>
                    <option value="4">4x</option>
                    <option>Custom</option>
                </select>
            </div>
            <div className="order-details-card">
                <p><small>{order.description}</small></p>
                <p><em>${order.price*quantity}</em></p>
            </div>
        </div>
    )
}

export default Order