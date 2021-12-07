import './index.css';

function SpellCard({spell: {name, effect, range, image, type, id}}){
    return (
        <div class= "card">
            <div >{name}</div> 
            <br></br>
            <div>{type}</div>
            <br></br>
            <div >{effect}</div>
            <br></br>
            <div>{range}</div>
            <br></br>
            <img src={image}/>
        </div>
    )
}
export default SpellsCard
