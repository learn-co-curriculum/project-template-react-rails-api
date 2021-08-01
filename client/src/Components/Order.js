import {useState} from 'react'

let Order = ({order}) => {
    const [currentOrderCart, setCurrentOrderCart]=useState([])

    // order.map(order => {
    //     fetch(`/drink/${order.drink_id}`)
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // })

    return (
        <div className="order-details-container">
            <div className="order-details-card">
                <p><small>item</small></p>
                <select className="order-selector-button">
                    <option>1x</option>
                    <option>2x</option>
                    <option>3x</option>
                    <option>4x</option>
                    <option>Custom</option>
                </select>
            </div>
            <div className="order-details-card">
                <p><small>description</small></p>
                <p><small>price</small></p>
            </div>
        </div>
    )
}

export default Order