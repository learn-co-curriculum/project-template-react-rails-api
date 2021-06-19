import React from 'react'
import TrainerCard from './TrainerCard'

const Trainers = (props) => {
	return (
		<div>
			{props.specialists.map((specialist) => {
				return <TrainerCard 
				specialist={specialist} 
				key={specialist.id}	
				/>
				})}
		</div>
	)
}

export default Trainers
