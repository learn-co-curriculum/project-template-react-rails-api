import React from 'react';
import StoryList from './StoryList';

export default function OurStoryMainPage(props) {
    const {us} = props;
    return <main className= "story-container">
    <h2> Our Story </h2>
    <div className= "row">
    {us.map((us) => (
        <StoryList key={us.id} us={us}> </StoryList>
    ))}
        </div>
        </main>
}
