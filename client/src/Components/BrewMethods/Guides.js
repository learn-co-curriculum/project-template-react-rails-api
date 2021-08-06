import React from 'react'
import { useHistory } from "react-router-dom";

export default function Guides(props) {    
    const {guides} = props;
    return (
        <div className= "guides">                
            <img className= "small" src ={guides.image} alt = {guides.name}></img>
                <h3> {guides.name} </h3>
                <div>
                <p> {guides.description} </p>
            </div>
        </div>
    )
}
