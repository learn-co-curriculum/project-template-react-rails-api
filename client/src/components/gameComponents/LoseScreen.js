import { useHistory } from "react-router-dom";

function LoseScreen({setRows, setStarted}){
    const history = useHistory();

    function quit() { 
        setStarted(false)
        let path = `/start`; 
        history.push(path);
    }
    
    function restart() {
        setRows([])
        let path = `/map`; 
        history.push(path);
    }
    return(
        <div className="losePage">
            <h1 className="loseHead">You Lose</h1>
            <button className="endButton" onClick={restart}>Restart</button>
            <button className="endButton" onClick={quit}>Back To Menu</button>
        </div>
    )
}
export default LoseScreen