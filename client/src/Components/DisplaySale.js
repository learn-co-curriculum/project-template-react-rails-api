import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DisplaySale(){
    const [seller, setSeller] = useState(0);
    const [sellerName, setSellerName] = useState("");
    const [item, setItem] = useState(0);
    const [itemImage, setItemImage] = useState("");
    const [itemName, setItemName] = useState("")
    const [bid, setBid] = useState(0);
    const [startingBid, setStartingBid] = useState(0);
    const [bidTime, setBidTime] = useState(0);
    const [isSeller, setIsSeller] = useState(false);
    const { id } = useParams();
    const [activate, setActivate] = useState(false);
    const [counterBid, setCounterBid] = useState("");
    useEffect(()=>{
        fetch(`http://localhost:3000/sales/${id}`)
        .then(r=>r.json())
        .then(r=>{
            setSeller(r.seller_id)
            setItem(r.item_id)
            setBid(r.bid)
            setStartingBid(r.starting_bid)
            setBidTime(r.bid_time)
            return r
        })
        .then(r=>{
            fetch(`http://localhost:3000/item/${r.item_id}`)
            .then(r=>r.json())
            .then(r=>{
                setItemImage(r.httpimage)
                setItemName(r.name)
            })
            fetch(`http://localhost:3000/user/${r.seller_id}`)
            .then(r=>r.json())
            .then(r=>{
                setSellerName(r.username)
            })
            return r
        })
        .then((r)=>{
            // below code will rely on series or whatever it is
            fetch(`http://localhost:3000/sellermatchuser/${r.seller_id}/${2}`)
            .then(r=>r.json())
            .then(r=>{
                if(r.yesis){
                    setIsSeller(true);
                }
            })
        })
    }, [id])
    function buttonClick(){
        setActivate(!activate);
    }
    function submitAttempt(){
        
    }
    return <div>
        <div>{isSeller ? "" : sellerName}</div>
        <div>{bidTime}</div>
        <img src={itemImage} alt={itemName}/>
        <div>{bid >= startingBid ? bid : startingBid}</div>
        {activate ? 
        <div>
            <div style={{float: "right", width: "2px"}}><button onClick={()=>buttonClick()}>NoBid</button></div>
            <ul style={{listStyleType: "none"}}>
                <li onClick={()=>setCounterBid(parseFloat((bid >= startingBid ? bid : startingBid) * .01))}>1%</li>
                <li onClick={()=>setCounterBid(parseFloat((bid >= startingBid ? bid : startingBid) * .05))}>5%</li>
                <li onClick={()=>setCounterBid(parseFloat((bid >= startingBid ? bid : startingBid) * .2))}>20%</li>
            </ul> 
            <textarea placeholder="$$$" value={counterBid} onChange={(e)=>setCounterBid(e.target.value)}></textarea>
            <div><button onClick={()=>submitAttempt()}>NoBid</button></div>
        </div>
        :
        <div><button onClick={()=>buttonClick()}>Bid</button></div>}
    </div>
}
export default DisplaySale;