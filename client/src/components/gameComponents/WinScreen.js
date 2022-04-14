import { useHistory } from "react-router-dom";

function WinScreen({setCount, rowCount}){
    const history = useHistory();

    function continueGame() {
        setCount(rowCount+1)
        let path = `/map`; 
        history.push(path);
    }
return(
    <div>
        <h1>Battle Won!</h1>
        <h2>Rewards:</h2>
        <button onClick={continueGame}>Continue</button>
    </div>

    )
}
export default WinScreen;