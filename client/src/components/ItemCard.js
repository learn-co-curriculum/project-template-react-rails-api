function ItemCard({item}){
    function deleteItem(){
        const formData = {
            id: item.id
        }
        fetch(`/item`,{
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
          })
    }
    return(
        <div>
            <h3>{item.itemType}</h3>
            <ul>
                <li>Strength: {item.strength}</li>
                <li>Agility: {item.ag}</li>
                <li>Inteligence: {item.intel}</li>
                <li>Exp Gain: {item.exp_gain}</li>
            </ul>
            <button onClick={deleteItem}>X</button>
            <button>Equip</button>
        </div>
    )
}

export default ItemCard;