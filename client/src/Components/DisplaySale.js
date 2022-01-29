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
    const [highestBidder, setHighestBidder] = useState("");
    const [highestBid, setHighestBid] = useState(0);
    const [reload, setReload] = useState(false)
    useEffect(()=>{
        fetch(`http://localhost:3000/sale/${id}`)
        .then(r=>r.json())
        .then(r=>{
            console.log(r)
            setSeller(r.seller_id)
            setItem(r.item_id)
            setBid(parseFloat(r.bid))
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
            fetch(`http://localhost:3000/saleshighestBid/${id}`)
            .then(r=>r.json())
            .then(r=>{
                if(r.greater){
                    setHighestBid(r.highest_bid.buy_price)
                    setHighestBidder(r.highest_bid.user.username)
                }
                else{
                    setHighestBid(0)
                }
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
                else{
                    setIsSeller(false);
                }
            })
        })
    }, [id, reload])
    function buttonClick(){
        setActivate(!activate);
    }
    function submitAttempt(){
        fetch(`http://localhost:3000/bidtime/${id}`, {
            method: "PATCH",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify({
                "item_id" : item,
                "user_id" : 1,
                "bidet": parseFloat(counterBid) + parseFloat(bid >= startingBid? bid: startingBid)
            })
        })
        .then(r=>r.json())
        .then(r=>{
            console.log(r)
            setReload(!reload)
        })
    }
    console.log(bid)
    return <div>
        <div>{isSeller ? "Your Sale" : sellerName}</div>
        <div>Started At{bidTime}</div>
        <img src={itemImage} alt={itemName}/>
        <div>{bid >= startingBid ? `Bidding By ${highestBidder} for : ${bid}`: `Starting Price at: ${startingBid}`}</div>
        {isSeller ? "" : 
        <div>
            {activate ? 
            <div>
                <div style={{float: "right", width: "2px"}}><button onClick={()=>buttonClick()}>NoBid</button></div>
                <ul style={{listStyleType: "none"}}>
                    <li onClick={()=>setCounterBid(parseFloat((bid >= startingBid ? bid : startingBid) * .01))}>1%</li>
                    <li onClick={()=>setCounterBid(parseFloat((bid >= startingBid ? bid : startingBid) * .05))}>5%</li>
                    <li onClick={()=>setCounterBid(parseFloat((bid >= startingBid ? bid : startingBid) * .2))}>20%</li>
                </ul> 
                <textarea placeholder="$$$" value={counterBid} onChange={(e)=>setCounterBid(e.target.value)}></textarea>
                <div><button onClick={()=>submitAttempt()}>SubmitBid</button></div>
            </div>
            :
            <div><button onClick={()=>buttonClick()}>Bid</button></div>}
        </div>}
    </div>
}
export default DisplaySale;