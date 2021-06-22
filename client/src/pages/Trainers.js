import React from 'react';
import TrainerCard from './TrainerCard'

const Trainers = (props) => {
	return (
	<div className="specialist-collection">
   {props.trainers.map((trainer) => {
				return <TrainerCard 
				filters={props.filters}
				trainer={trainer} 
				key={trainer.id}	
				/>
				})}
    </div>
	)
}

export default Trainers

