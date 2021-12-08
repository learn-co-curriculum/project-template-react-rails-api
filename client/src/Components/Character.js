import React from "react";
import CharacterCard from "./CharacterCard";
import { useState, useEffect } from "react";

function Characters() {
  let MY_URL = "http://localhost:4000/characters";
  const [characterList, setCharacterList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(MY_URL)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setCharacterList(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <div>Content is Loading</div>;

  const characterCards = characterList.map((character) => (
    <CharacterCard key={character.id} character={character} />
  ));

  return <div class="Card">{characterCards}</div>;
}

export default Characters;
