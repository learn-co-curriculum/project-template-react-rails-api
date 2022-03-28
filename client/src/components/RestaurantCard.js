
import { Link } from "react-router-dom"


function RestaurantCard ({restaurant}) {

    const {name, address, description, delivery_fee, hours, image_url, id} = restaurant 

    return (
        <>
            <Link to={`/restaurants/${id}`}>
                <div> {name} </div>
                <div> {description} </div>
                <img src={image_url} alt={name}></img>
            </Link> 
        </>
    )
}

export default RestaurantCard