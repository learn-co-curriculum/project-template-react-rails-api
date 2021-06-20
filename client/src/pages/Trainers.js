import React from 'react';
import TrainerCard from './TrainerCard'

const Trainers = (props) => {
	return (
	<div className="specialist-collection">
   {props.specialists.map((specialist) => {
				return <TrainerCard 
				filters={props.filters}
				onUpdatedChecklist={props.handleUpdateChecklist}
				specialist={specialist} 
				key={specialist.id}	
				/>
				})}
    </div>
	)
}

export default Trainers

