import { useState } from "react"

function MenuItem ({item, handleEdit, showEditForm, form, handleDeleteItem}) {
    const {name, description, price, image_url, id} = item
    
    function handleDelete (e) {
        fetch(`/menu_items/${id}`, {
            method: "DELETE"
        }) 
        .then(() => console.log("deleted!"))
        handleDeleteItem(id)
    }

    return (
        <div>
            <div className="menu-item-card">
                <p>{name}</p> 
                <p>{description}</p> 
                <p>${price}</p> 
                <img className="food-img" src={image_url} alt={name}></img> 
                <div className="edit-item-div">
                    <button id={id} className ="button" onClick={handleEdit}> Edit </button>
                    <button id={id} className ="button" onClick={handleDelete}> Delete </button>
                </div>
                {showEditForm ? form : null}
            </div> 
        </div>
    )

}

export default MenuItem