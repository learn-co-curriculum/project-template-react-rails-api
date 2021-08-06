let Bean = ({bean}) => {
    let handleAddToCart = () => {

    }

    return (
        <div className="drink-container">
            <div>
                <img className="drinks-image" src={bean.img_url} alt={`img of ${bean.name}`}/>
            </div>
            <div id={bean.id} className="drink-info">
                <h4>{bean.name}</h4>
                <p><small>{bean.variety}</small></p>
                <p><small>{bean.region}</small></p>
                <p><small>{bean.roast} Roast</small></p>
                <p>{bean.description}</p>
                <button className="drink-button" onClick={handleAddToCart}>Add to cart</button>
            </div>
        </div>
    )
}

export default Bean