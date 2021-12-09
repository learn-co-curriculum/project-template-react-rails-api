import React, {useState, useEffect} from 'react'
import Card from './Card'

function Leaderboard(){
    const [usersData, setUsersData] = useState([])

    useEffect(() => {
        fetch('/users') 
        .then(resp => resp.json())
        .then(data => setUsersData(data.sort((a, b) => {
            if(a.score < b.score) return 1
            else return -1
        })))
    }, []);
    console.log(usersData)
    return usersData.map((data) => <Card idx={usersData.indexOf(data)} key={data.id} data={data}/>)
}

// const LeaderboardContent = styled.div`
//     margin-top: 200px;
//     position: relative;
//     height: 100%;
//     align-items:center;
//     box-sizing: border-box;
//     display: flex;
//     justify-content: center;
//     color: #3c4159;
//     font-family: "Copperplate", fantasy
// `
export default Leaderboard