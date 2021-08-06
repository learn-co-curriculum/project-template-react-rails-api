import React from 'react'

export default function StoryList(props) {
    const {us} = props;
    
    return (
        <div className= "story-items">
        <img className= "small" src ={us.image} alt = {us.name}></img>
        <h3> {us.name} </h3>
        <div>
        <p className="story-box"> {us.story}</p>
        </div>
        </div>
    )
}
