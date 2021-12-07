function MinionCard({ MinionCard: { name, description, image, bio, id } }) {
  return (
    <div class="card">
      <div>{name}</div>
      <br></br>
      <div>{description}</div>
      <br></br>
      <div>{bio}</div>
      <br></br>
      <img src={image} />
    </div>
  );
}

export default MinionCard;
