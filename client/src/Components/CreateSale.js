import { useParams, Link } from "react-router-dom"
import { useState } from "react";
function CreateSale(){
    const [toCreateOrNotTo, setToCreateOrNotTo] = useState(true); 
    const [date, setDate] = useState("");
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [itemId, setItemId] = useState(0);
    function change(){
        setToCreateOrNotTo(!toCreateOrNotTo);
    }
    function handlePost(e){
        e.preventDefault();
        if(toCreateOrNotTo){
            
        }
        else{

        }
    }
    return <div>
        <div onClick={change()}>
            {toCreateOrNotTo ? "Choose Item" : "Create Item"}
        </div >
        <form>
            {toCreateOrNotTo? <div>
                <textarea placeholder="Input Http Image Link" value={image} onChange={setImage(e.target.value)}></textarea>
                <textarea placeholder="EnterName" value={name} onChange={setName(e.target.value)}></textarea>
            </div>: <textarea value={itemId} onChange={setItemId(e.target.value)} placeholder="Choose Item Id"></textarea>}
            <textarea value={e.target.value}>
            </textarea>
            <input type={"datetime-local"} value={date} onChange={setDate(e.target.value)}></input>
            <button onClick={handlePost(e)}></button>
        </form>
    </div>
}
export default CreateSale;