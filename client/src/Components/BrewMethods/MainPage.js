import React from 'react';
import List from './List';

export default function MainPage(props){
    const {list} = props;
    return <main className= "guide-container">
        <h2> Guides </h2>
        <div className= "row">
    {list.map((list) => (
        <List key={list.id} list={list}> </List>
    ))}

        </div>
    </main>
}