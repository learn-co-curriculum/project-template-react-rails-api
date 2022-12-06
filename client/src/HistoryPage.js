import NavBar from "./NavBar/NavBar";
import React from "react";
import { useEffect, useState } from "react";
import HistoryCard from "./HistoryCard";
import "./History.css"

function HistoryPage(){
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("/me")
        .then(resp => resp.json())
        .then((data) => {
            const foodsAndExercises = data.exercises.concat(data.foods)
            let dates = foodsAndExercises.map(item => {
                return item.created_at.slice(0,10)
            })
            const daysArray = []
            dates = new Set(dates)
            dates.forEach(day => {
                daysArray.push(foodsAndExercises.filter(item => item.created_at.slice(0,10) === day))
            })
            setData(daysArray)
        })
    }, [])
    console.log(data)

    const CardContainer = ({daysArray}) => {
        const eachDay = data.map(day => <HistoryCard key={day[0].created_at.slice(0,10)} dayData={day}/>)
        return (
            <div>
                {eachDay}
            </div>
        )
    }


    return (
        <>
            <NavBar />
            <CardContainer />
        </>
    )
}

export default HistoryPage;