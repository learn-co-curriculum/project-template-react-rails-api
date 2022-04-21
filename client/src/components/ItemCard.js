function ItemCard({item, setReset, myReset}){
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
          .then(setReset(!myReset))
    }
    return(
        <div className="itemCard">
            <h3>{item.itemType}</h3>
            <ul>
                <p className="itemAtt">Strength: {item.str}</p>
                <p className="itemAtt">Agility: {item.ag}</p>
                <p className="itemAtt">Inteligence: {item.intel}</p>
                <p className="itemAtt">Exp Gain: {item.exp_gain}</p>
            </ul>
            <button onClick={deleteItem}>X</button>
            <button>Equip</button>
        </div>
    )
}

export default ItemCard;