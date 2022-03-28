function MenuItem ({item}) {
    const {name, description, price, image_url} = item

    return (
        <div>
            <p>{name}</p> 
            <p>{description}</p> 
            <p>${price}</p> 
            <img src={image_url} alt={name}></img> 
        </div> 
    )

}

export default MenuItem