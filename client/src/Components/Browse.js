import { useEffect } from "react";
import { useState } from "react";
import BrowseSales from "./BrowseSales";
import Header from "./Header";

function Browse(){
    const [sales, setSales] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:3000/salesUser")
        .then(r=>r.json())
        .then(r=>{
            setSales(r)
        })
    }, [])
    console.log(sales)
    return <div>
        <Header/>
        {sales.map((c)=>(
            <BrowseSales sale={c}/>
        ))}
    </div>
}
export default Browse;