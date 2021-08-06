import React from 'react';

export default function Guides(props) {
const {list} = props;

return (
    <div className= "items">
    <img className= "small" src ={list.image} alt = {list.name}></img>
    <h3> {list.name} </h3>
    <p>
        {list.instructions}
    </p>
    </div>
)
}