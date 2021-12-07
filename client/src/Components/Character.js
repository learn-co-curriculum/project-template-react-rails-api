import React from "react";
import CharacterCard from "./CharacterCard";

function Characters({ character }) {
  const renderCharacters = character.map((character) => (
    <CharacterCard key={character.id} character={character} />
  ));

  return <div class="Card">{renderCharacters}</div>;
}

export default Characters;
