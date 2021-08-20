import React, {useState} from 'react'


function ChoreForm(){
    const [choreData, setChoreData] = useState({
        chore_name:"",
        description:"",
        min_age: 6
    })
    return (
        <div>
            <form>
                <input name="chore_name" value={choreData.chore_name}></input>
                <input name="description" value={choreData.description}></input>
                <select name="min_age">
                    <option selected>Select Age</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                    <option value={11}>11</option>
                    <option value={12}>12</option>
                    <option value={13}>13</option>
                    <option value={14}>14</option>
                    <option value={15}>15</option>
                    <option value={16}>16</option>
                    <option value={17}>17</option>
                    <option value={18}>18</option>
                </select>
            </form>
        </div>
    )
}

export default ChoreForm
