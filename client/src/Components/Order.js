let Order = ({order}) => {
    console.log(order)
    return (
        <div className="order-details-container">
            <div className="order-details-card">
                <img className="coffee-order-thumbnail" src={order.img_url} alt='picture of coffee'/>
                <p><small>{order.name}</small></p>
                <select className="order-selector-button">
                    <option>1x</option>
                    <option>2x</option>
                    <option>3x</option>
                    <option>4x</option>
                    <option>Custom</option>
                </select>
            </div>
            <div className="order-details-card">
                <p><small>{order.description}</small></p>
                <p><em>${order.price}</em></p>
            </div>
        </div>
    )
}

export default Order