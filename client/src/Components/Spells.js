import React from "react";
import SpellsCard from './SpellsCard';

function Spells({spell}){
  const renderSpells = spell.map(oneSpell=><SpellsCard key = {oneSpell.id} vintage= {oneSpell} />)
  console.log(spell)
  

  return(
      
      <div>
     {renderSpells}
     </div>  
      
  )
}
export default Spells;
