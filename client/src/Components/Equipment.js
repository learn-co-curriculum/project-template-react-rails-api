import React from "react";
import EquipmentCard from "./EquipmentCard";

function Equipments({ equipments }) {
  const renderEquipments = equipments.map((equipment) => (
    <EquipmentCard key={equipment.id} equipment={equipment} />
  ));

  return <div class="Card">{renderEquipments}</div>;
}

export default Equipments;
