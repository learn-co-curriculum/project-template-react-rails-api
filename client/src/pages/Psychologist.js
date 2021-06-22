import React from 'react';
import TherpistCard from './TherapistCard'

const Psychologist = (props) => {
	return (
	<div className="specialist-collection">
   {props.psychologists.map((psychologist) => {
				return <TherpistCard 
				filters={props.filters}
				psychologist={psychologist} 
				key={psychologist.id}	
				/>
				})}
    </div>
	)
}

export default Psychologist