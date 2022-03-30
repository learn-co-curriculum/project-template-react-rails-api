import React from "react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import MenuItem from "./MenuItem"
import ShoppingCart from "./ShoppingCart"


function MenuPage ({restaurants}) {
    const {restaurantId} = useParams()
    const [menuItems, setMenuItems] = useState([])
    const [showForm, setShowForm] = useState(false)
    const [formInput, setFormInput] = useState({})
    const [showEditForm, setShowEditForm] = useState(false)
    const [editFormInput, setEditFormInput] = useState({})
    const [restaurant, setRestaurant] = useState({})
    const [cartItems, setCartItems] = useState([])
    const [menuItemId, setMenuItemId] = useState()

    useEffect(() => {
        const currentRestaurant = restaurants.find((restaurant) => restaurant.id === parseInt(restaurantId))
        if (currentRestaurant) {
            setRestaurant(currentRestaurant)
            setMenuItems(currentRestaurant.menu_items)
        } 
    }, [restaurants, restaurantId, setRestaurant])

    function showNewItemForm() {
        setShowForm(!showForm)
        setShowEditForm(false)
    }

    const form = 
    <form 
        className="form"  
        onSubmit = {handleNewFormSubmit}
    >
        <label>
            Name:
            <input 
                onChange={handleNewFormInputs} 
                type="text" 
                name="name"
                value={formInput.name}
            />
        </label>
        <label>
            Description:
            <input 
                onChange={handleNewFormInputs} 
                type="text" 
                name="description" 
                value={formInput.description}
            />
        </label>
        <label>
            Price:
            <input 
                onChange={handleNewFormInputs} 
                type="text" 
                name="price" 
                value={formInput.price}
            />
        </label>
        <label>
            Image URL:
            <input 
                onChange={handleNewFormInputs} 
                type="text" 
                name="image_url" 
                value={formInput.image_url}
            />
        </label>
        <label>
            Menu ID:
            <input 
                onChange={handleNewFormInputs} 
                type="text" 
                name="menu_id" 
                value={formInput.menu_id}
            />
        </label>
        <label>
            Restaurant ID:
            <input 
                onChange={handleNewFormInputs} 
                type="text" 
                name="restaurant_id" 
                value={formInput.restaurant_id}
            />
        </label>
        <input 
            className="button" 
            type="submit" 
            value="Submit" 
        />
    </form>

    function handleNewFormInputs (e) {
        const input = e.target.value
        setFormInput({...formInput, [e.target.name]: input})
        console.log(formInput)
    }

    function handleEditFormInputs (e) {
        const input = e.target.value
        setFormInput({...formInput, [e.target.name]: input})
        console.log(formInput)
    }

    function handleNewFormSubmit (e) {
        e.preventDefault()

        if (showForm) {

            fetch(`/menu_items`, { 
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(formInput)
            })
            .then(r => {
                if(r.ok){
                    r.json()
                    .then(newItem => {
                        setMenuItems([...menuItems, newItem]) 
                     })    
                }
                else {window.alert("Unauthorized")}
            })
            setShowForm(false)
        }
    }

    function handleEditFormSubmit (e) {
        e.preventDefault()

        if (showEditForm) {
            fetch(`/menu_items/${e.target.id}`, { 
                method: "PATCH",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(editFormInput)
            })
            .then(r => r.json())
            .then(() => {
                setMenuItems([...menuItems]) 
            })
            setShowEditForm(false)
        }
    }
    
    function handleDeleteItem(id) {
        const updatedItems = menuItems.filter(item => item.id !== id)
        setMenuItems(updatedItems)
    }

    function handleEdit (e) {
        setShowEditForm(!showEditForm)
        setShowForm(false)
        setMenuItemId(e.target.id)
        console.log(e.target.id)
    }

    let singleMenuItem = menuItems?.map((item) => (
            <div key={item.id}> 
                <MenuItem 
                    item={item} 
                    setMenuItems={setMenuItems}
                    menuItems={menuItems}
                    handleDeleteItem={handleDeleteItem}
                    handleEdit={handleEdit}
                    showEditForm={showEditForm}
                    setMenuItemId={setMenuItemId}
                    form={form}
                    onAdd={onAdd}
                />
            </div>
    ))

    
    function onAdd(item) {
        const exist = cartItems.find((cartItem) => cartItem.id === item.id)
        if (exist) {
            setCartItems(
                cartItems.map((cartItem) => 
                    cartItem.id === item.id ? {...exist, qty: exist.qty +1} : cartItem
                )
            )
        } else {
            setCartItems([...cartItems, { ...item, qty: 1}])
        }
    }

    function onRemove(item) {
        const exist = cartItems.find((cartItem) => cartItem.id === item.id)
        if (exist.qty === 1) {
          setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id))
        } else {
          setCartItems(
            cartItems.map((cartItem) =>
            cartItem.id === item.id ? { ...exist, qty: exist.qty - 1 } : cartItem
            )
          )
        }
      }

    return(
        <div>

            <div>
                <button className="button" id="add-new" onClick={showNewItemForm}>
                    Add New Menu Item
                </button>
                {showForm ? form : null}
            </div>
            <div>
                <div>{singleMenuItem}</div> 
            {cartItems.length > 0 ? <ShoppingCart 
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove} 
            /> : null}
            </div>

        </div>
    )
}

export default MenuPage