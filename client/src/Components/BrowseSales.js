import { useEffect, useState } from "react";

function BrowseSales({ sale }){
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");
    const [itemName, setItemName] = useState("");
    useEffect(()=>{
        fetch(`http://localhost:3000/userbysale/${sale.seller_id}`)
        .then(r=>r.json())
        .then(r=>{
            console.log(r)
            setName(r.username)
        })
        fetch(`http://localhost:3000/item/${sale.item_id}`)
        .then(r=>r.json())
        .then(r=>{
            console.log(r)
            setUrl(r.httpimage);
            setItemName(r.name);
        })
    }, [])
    console.log(sale.bid_time)
    const parsingStart = sale.bid_time.toString()
    const parsedDate = `${parsingStart.slice(6,8)}/${parsingStart.slice(4, 6)}/${parsingStart.slice(0,4)}  ${parsingStart.slice(8,10)}:${parsingStart.slice(11,13)}`;
    return <div style={{width: "90%", height: "100px", backgroundColor: "red", marginTop: "15px", marginLeft:"5%"}}>
        <div
            style={{float: "left", margin: "1%", width: "10%", height:"20%", textAlign:"center", fontWeight: '900', overflow: "hidden",textOverflow: "ellipsis", marginBottom:"1%"}}
            >{name}
        </div>
        <img style={{float: "left",height: "100%", width: "40%", marginRight: "2%", backgroundColor: "slategrey"}}
            layout="fill"
            src={url}
            alt={itemName}
        />
        <div style={{float: "left",width:"20%", height:"40%", textAlign:"left", overflow: "hidden", textOverflow: "ellipsis"}}>
            {itemName}
        </div>
        <div style={{float:"right", marginRight: "2%", marginTop: "2%", width: "12%", overflow:"auto"}}>
            {parsedDate}
        </div>
        <div style={{float:"left",width: "20%", overflow: "hidden", textOverflow: "ellipsis"}}>
            {`Current BidPrice: ${sale.bid > sale.starting_bid ? sale.bid :sale.starting_bid}`}
        </div>
    </div>
}
export default BrowseSales;