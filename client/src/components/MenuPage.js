import React from "react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import MenuItem from "./MenuItem"
import ShoppingCart from "./ShoppingCart"


function MenuPage ({restaurants, setRestaurant, restaurant}) {
    const {restaurantId} = useParams()
    const [menuItems, setMenuItems] = useState([])
    const [showForm, setShowForm] = useState(false)
    const [formInput, setFormInput] = useState({})
    const [showEditForm, setShowEditForm] = useState(false)
    const [editFormInput, setEditFormInput] = useState({})
    const [restaurant, setRestaurant] = useState({})
    const [cartItems, setCartItems] = useState([])

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
    <form className="form"  onSubmit = {handleFormSubmit}>
        <label>
            Name:
            <input 
                onChange={handleFormInputs} 
                type="text" 
                name="name"
                value={formInput.name}
            />
        </label>
        <label>
            Description:
            <input 
                onChange={handleFormInputs} 
                type="text" 
                name="description" 
                vale={formInput.description}
            />
        </label>
        <label>
            Price:
            <input 
                onChange={handleFormInputs} 
                type="text" 
                name="price" 
                vale={formInput.price}
            />
        </label>
        <label>
            Image URL:
            <input 
                onChange={handleFormInputs} 
                type="text" 
                name="image_url" 
                vale={formInput.image_url}
            />
        </label>
        <label>
            Menu ID:
            <input 
                onChange={handleFormInputs} 
                type="text" 
                name="menu_id" 
                vale={formInput.menu_id}
            />
        </label>
        <label>
            Restaurant ID:
            <input 
                onChange={handleFormInputs} 
                type="text" 
                name="restaurant_id" 
                vale={formInput.restaurant_id}
            />
        </label>
        <input 
            className="button" 
            type="submit" 
            value="Submit" 
        />
    </form>

    function handleFormInputs (e) {
        const input = e.target.value
        setFormInput({...formInput, [e.target.name]: input})
        console.log(formInput)
    }

    function handleFormSubmit (e) {
        e.preventDefault()

        if (showForm) {

            fetch(`/menu_items`, { 
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(formInput)
            })
            .then(r => r.json())
            .then(newItem => {
                setMenuItems([...menuItems, newItem]) 
            })
            setShowForm(false)
        }

        else if (showEditForm) {
            
            fetch(`/menu_items/${e.target.id}`, { 
                method: "PATCH",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(formInput)
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