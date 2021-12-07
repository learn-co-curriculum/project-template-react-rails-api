function EquipmentCard({
  equipmentCard: { name, image, description, bonus, type, id },
}) {
  return (
    <div class="card">
      <div>{name}</div>
      <br></br>
      <div>{description}</div>
      <br></br>
      <div>{bonus}</div>
      <br></br>
      <div>{type}</div>
      <br></br>
      <img src={image} />
    </div>
  );
}

export default EquipmentCard;
