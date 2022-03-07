import * as React from 'react';
import { useState, useEffect } from "react";

import {Link} from 'react-router-dom'
import LibraryItem from './LibraryItem'

function LibraryList({bgData}){
    

return(
    <div>
        {bgData.map(bg => (
            <LibraryItem 
            bg={bg}
            name={bg.name} 
            id={bg.id} 
            picture_url={bg.picture_url} 
            num_players={bg.num_players} 
            summary={bg.summary}
            genre={bg.genre}
            est_time={bg.est_time}
            borrow={bg.borrow}
            available={bg.available}
            /> 
        ))}
    </div>
    
    )}

export default LibraryList;