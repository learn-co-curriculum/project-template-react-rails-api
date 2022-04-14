import {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";
import MapTile from './MapTile';
function Map({rowCount, setCount, rows, setRows}){
    const history = useHistory();

    function quit() { 
        let path = `/start`; 
        history.push(path);
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    function makeRow(max,min){
        let myRow = [];
        while (myRow.length < 3) {
            myRow.push(<MapTile value = {rowCount} type = {getRandomInt(min,max)}/>)
        }
        setRows([myRow, ...rows])
    }

    useEffect(()=>{
        if(rowCount=1){
            makeRow(0,3)
        }
        else{
            makeRow(0,4)
        }
    },[])
    

    return(
        <div>
            <button onClick = {quit}>Quit</button>
            <button onClick={()=>makeRow(0,4)}>Make Row</button>
            <h1>Map</h1>
            <div className='containerContainer'>{rows.map((row)=>{
                return(<div className='tileContainer'>{row}</div>)
            })}</div>
        </div>
    )
}

export default Map;