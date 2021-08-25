import "./Budget.css"
import { FaCalculator, FaCoins, FaHandHoldingUsd  } from "react-icons/fa";


const Budget = () => {
    return (
        <div>
            <h1>Budget</h1>
            <button>Add Target Budget</button>
            <button>Contribute</button>

            <div className='budget-icons-div'>

                <div>
                    <FaCalculator className='calculator-icon'/>
                    <p>Target Budget</p>
                    <p>$0.00</p>
                </div>

                <div id="budget-icons">
                    <FaCoins className='coin-icon'/>
                    <p>Total Actual</p>
                    <p>$0.00</p>
                </div>

                <div>
                    <span className='hand-circle'><FaHandHoldingUsd className='hold-hands-icon'/></span>
                    <p>Total Paid to Date</p>
                    <p>$0.00</p>
                </div>
                

             </div>
             
        </div>
    )
}

export default Budget
