function MenuItem ({item, handleDeleteItem}) {
    const {name, description, price, image_url, id} = item

    function handleDelete () {
        fetch(`/menu_items/${id}`, {
            method: "DELETE",
        }) 
            .then((r) => r.json())
            .then(() => console.log("deleted!"))
            handleDeleteItem(id)
    }

    return (
        <div>
            <p>{name}</p> 
            <p>{description}</p> 
            <p>${price}</p> 
            <img src={image_url} alt={name}></img> 
            <button onClick={handleDelete}> Delete Menu Item </button>
        </div> 
    )

}

export default MenuItem