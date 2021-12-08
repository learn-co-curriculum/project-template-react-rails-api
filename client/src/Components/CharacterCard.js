function CharacterCard({ characterCard: { name, age, image, bio, id } }) {
  return (
    <div class="card">
      <div>{name}</div>
      <br></br>
      <div>{age}</div>
      <br></br>
      <div>{bio}</div>
      <br></br>
      <img src={image}/>
    </div>
  );
}

export default CharacterCard;
