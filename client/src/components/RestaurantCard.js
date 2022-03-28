

function RestaurantCard ({restaurant}) {

    const {name, address, description, delivery_fee, hours, image_url} = restaurant 

    return (
        <>
            <div> {name} </div>
            <div> {description} </div>
            
        </>
    )
}

export default RestaurantCard