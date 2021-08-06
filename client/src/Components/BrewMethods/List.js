import React from 'react'
import { useHistory } from "react-router-dom";
import Guides from './Guides'

export default function List(props) {
    const history = useHistory();
    const routeChange = () =>{ 
        let path = '/guides'; 
        history.push(path);
      }
    const {list} = props;
    return (
                <div className= "items">
                    <img className= "small" src ={list.image} alt = {list.name}></img>
                    <h3> {list.name} </h3>
                    <div> 
                    <button className="guides-button" onClick={routeChange}> View Guide </button>
                    </div>
                </div>
    )
}
