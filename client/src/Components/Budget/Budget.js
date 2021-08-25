import "./Budget.css"
import { FaCalculator, FaCoins, FaHandHoldingUsd  } from "react-icons/fa";
import { useState } from 'react'

const Budget = ({event, user}) => {

    const [budget, setBudget] = useState("0.00")
    const [inputBudget, setInputBudget] = useState('')
    const [inputPaid, setInputPaid] = useState('')
    const [paid, setPaid] = useState("0.00")

    const newTargetBudget = {
        target_budget: inputBudget,
        total_actual: 0,
        total_paid: 0,
        event_id: event.id,
        user_id: user.id
    }

    

    function handleAddBudget(e){
        e.preventDefault()
        fetch("/budgets", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newTargetBudget),
        }).then(setBudget(inputBudget))
    }

    function handleAddPayment(e){
        e.preventDefault()
        setPaid(inputPaid)
    }


    return (
        <div>
            <h1>Budget</h1>
            <button>Add Target Budget</button>
            <button>Contribute</button>

            <form onSubmit={(e) => handleAddBudget(e)}>
                <input type='text' onChange={(e) => setInputBudget(e.target.value)}></input>
                <button>Add</button>
            </form>

            <form onSubmit={(e) => handleAddPayment(e)}>
                <input type='text' onChange={(e) => setInputPaid(e.target.value)}></input>
                <button>Add</button>
            </form>

            <div className='budget-icons-div'>

                <div>
                    <FaCalculator className='calculator-icon'/>
                    <p>Target Budget</p>
                    <>${budget}</>
                </div>

                <div id="budget-icons">
                    <FaCoins className='coin-icon'/>
                    <p>Total Actual</p>
                    <>${paid}</>
                </div>

                <div>
                    <span className='hand-circle'><FaHandHoldingUsd className='hold-hands-icon'/></span>
                    <p>Total Paid to Date</p>
                    <>${paid}</>
                </div>
                

             </div>
             
        </div>
    )
}

export default Budget
