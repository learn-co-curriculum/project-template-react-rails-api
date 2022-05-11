import ProfileInfo from "./ProfileInfo";

function Profile({parents}) {
	const renderParents = parents.map(parent => 
	<><ProfileInfo 
		key={parents.id}
		parents={parents}
		verified={parents.verified}
		early={parents.early}
		nightOwl={parents.nightOwl}
		age={parents.age}
		name={parents.name}
		email={parents.email}
		address={parents.address}
		image={parents.image}
		/>
	</>);
	return (
		<main>
			{renderParents}
		</main>
        
	)
	}


export default Profile;