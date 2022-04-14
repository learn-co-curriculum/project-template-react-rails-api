import { useHistory } from "react-router-dom";

function LoseScreen({setRows}){
    const history = useHistory();

    function quit() { 
        let path = `/start`; 
        history.push(path);
    }
    
    function restart() {
        setRows([])
        let path = `/map`; 
        history.push(path);
    }
    return(
        <div>
            <h1>You Lose</h1>
            <button onClick={restart}>Restart</button>
            <button onClick={quit}>Back To Menu</button>
        </div>
    )
}
export default LoseScreen