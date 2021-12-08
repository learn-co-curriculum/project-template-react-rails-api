import React from "react";
import EquipmentCard from "./EquipmentCard";

function Equipments({ equipment }) {
  const renderEquipments = equipment.map((equipment) => (
    <EquipmentCard key={equipment.id} equipment={equipment} />
  ));

  return <div class="Card">{renderEquipments}</div>;
}

export default Equipments;
