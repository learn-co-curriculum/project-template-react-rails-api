

function RestaurantCard ({restaurant}) {

    const {name, address, description, delivery_fee, hours, image_url} = restaurant 

    return (
        <>
            <div> {name} </div>
            <div> {description} </div>
            <img src={image_url} alt={name}></img>
        </>
    )
}

export default RestaurantCard