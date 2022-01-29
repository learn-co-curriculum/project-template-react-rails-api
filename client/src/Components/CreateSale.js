import { useParams, Link, Navigate } from "react-router-dom"
import { useEffect, useReducer, useState } from "react";
function CreateSale(){
    const [toCreateOrNotTo, setToCreateOrNotTo] = useState(true); 
    const [date, setDate] = useState("");
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [itemId, setItemId] = useState(0);
    const [startingBid , setStartingBid] = useState(0);
    const [linker, setLinker] = useState("/sale");
    function change(){
        setToCreateOrNotTo(!toCreateOrNotTo);
    }
    function handlePost(e){
        e.preventDefault();
        if(toCreateOrNotTo){
            const b = [date.split("-")[0], date.split("-")[1], date.split("-")[2].split("T")[0], date.split("-")[2].split("T")[1].replace(":", ".")]
            const c = b.reduce((a, d)=>{
            return a + d
            })
            fetch("http://localhost:3000/item",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    httpimage: image,
                    name: name
                })
            })
            .then((r)=>r.json())
            .then((r)=>{
                fetch("http://localhost:3000/sale",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    seller_id: 1, 
                    item_id: r.id,
                    bid: 0,
                    starting_bid: startingBid,
                    bid_time: c,
                })
                })
                .then(r=>r.json())
                .then(r=>{
                    console.log("hello" + r)
                    setLinker(`/sale/${r.id}`)})
                .catch(error=>console.error('Error:', error))
                return r
            })
            .then(r=>{
                console.log(r)
            })
            .catch(error=>console.error('Error:', error))
        }
        else{

        }
    }
    if(date != ""){
        const b = [date.split("-")[0], date.split("-")[1], date.split("-")[2].split("T")[0], date.split("-")[2].split("T")[1].replace(":", ".")]
        const c = b.reduce((a, d)=>{
            console.log(a)
            return a + d
        })
        console.log(c)
    }
    console.log(linker)
    return linker === "/sale"? 
    <div>
        <div onClick={()=>change()}>
            {toCreateOrNotTo ? "Choose Item" : "Create Item"}
        </div >
        <form>
            {toCreateOrNotTo? <div>
                <textarea placeholder="Input Http Image Link" value={image} onChange={(e)=>setImage(e.target.value)}></textarea>
                <textarea placeholder="EnterName" value={name} onChange={(e)=>setName(e.target.value)}></textarea>
            </div>: <textarea value={itemId} onChange={(e)=>setItemId(e.target.value)} placeholder="Choose Item Id"></textarea>}
            {/* <textarea onChange={(e)=>e.target.value}>
            </textarea> */}
            <input type={"datetime-local"} value={date} onChange={(e)=>setDate(e.target.value)}></input>
            <textarea value={startingBid} onChange={(e)=>setStartingBid(e.target.value)} placeholder="Type Starting Bid Amount"></textarea>
            <button onClick={(e)=>handlePost(e)}></button>
        </form>
    </div>
    :
    <Navigate to={linker}></Navigate>
}
export default CreateSale;