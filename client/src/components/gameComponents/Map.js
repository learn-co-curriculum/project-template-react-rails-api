import {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";
import MapTile from './MapTile';
function Map({rowCount, setCount}){
    const [rows, setRows] = useState([])
    const history = useHistory();
    const [currentRow, setCurrentRow] = useState([])


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
        setCurrentRow(myRow)
        setRows([myRow, ...rows])
    }

    useEffect(()=>{
        console.log(rowCount)
        makeRow(0,3)
    },[rowCount])
    

    return(
        <div>
            <button onClick = {quit}>Quit</button>
            <button onClick={()=>makeRow(0,4)}>Make Row</button>
            <h1>Map</h1>
            <div>{rows}</div>
        </div>
    )
}

export default Map;