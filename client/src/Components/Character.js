import React from "react";
import CharacterCard from "./CharacterCard";

function Characters({character}){
  const renderCharacters = character.map((onecharacter) =><CharacterCard key={onecharacter.id} character={onecharacter} />
  );

  return <div class="Card">{renderCharacters}</div>;
}

export default Characters;



