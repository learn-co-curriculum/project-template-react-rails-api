import React from 'react'

export default function List(props) {
    const {list} = props;
    return (
                <div className= "items">
                    <img className= "small" src ={list.image} alt = {list.name}></img>
                    <h3> {list.name} </h3>
                    <div> 
                    <button className="guides-button" > View </button>
                    </div>
                </div>
    )
}
