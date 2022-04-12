import {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";
import MapTile from './MapTile';
function Map({character}){
    const [rows, setRows] = useState([])
    const [currentRow, setCurrentRow] = useState([])
    const [rowCount, setCount] = useState(0)
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
            myRow.push(<MapTile value = {rowCount} rowCount = {rowCount} type = {getRandomInt(min,max)}/>)
        }
        setCurrentRow(myRow)
        setRows(()=>[[currentRow], ...rows])
        setCount(rowCount + 1)
    }

    useEffect(()=>{
        makeRow(0,3)
    },[])
    

    return(
        <div>
            <button onClick = {quit}>Quit</button>
            <button onClick={()=>makeRow(0,4)}>Make Row</button>
            <h1>Map</h1>
            {rows}
        </div>
    )
}

export default Map;