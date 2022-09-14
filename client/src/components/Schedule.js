import React, { useState, useEffect } from "react";
import ScheduleCard from "./ScheduleCard";

function Schedule() {
  const [broncos, setBroncos] = useState([]);
  const [avalanche, setAvalanche] = useState([]);
  const [rockies, setRockies] = useState([]);
  const [nuggets, setNuggets] = useState([]);

  useEffect(() => {
    fetch("/schedule/broncos")
      .then((res) => res.json())
      .then((Arr) => {
        setBroncos(Arr);
      });
  }, []);

  useEffect(() => {
    fetch("/schedule/avalanche")
      .then((res) => res.json())
      .then((Arr) => {
        setAvalanche(Arr);
      });
  }, []);

  useEffect(() => {
    fetch("/schedule/nuggets")
      .then((res) => res.json())
      .then((Arr) => {
        setNuggets(Arr);
      });
  }, []);

  useEffect(() => {
    fetch("/schedule/rockies")
      .then((res) => res.json())
      .then((Arr) => {
        setRockies(Arr);
      });
  }, []);

  const broncoCard = broncos.map((bronco) => {
    return <ScheduleCard key={bronco.id} artist={bronco} />;
  });

  const avCard = avalanche.map((av) => {
    return <ScheduleCard key={av.id} artist={av} />;
  });

  const rockieCard = rockies.map((rockie) => {
    return <ScheduleCard key={rockie.id} artist={rockie} />;
  });

  const nuggetCard = nuggets.map((nugget) => {
    return <ScheduleCard key={nugget.id} artist={nugget} />;
  });

  return (
    <div className="stage-container">
      <div className="stages">
        <h1>Broncos Stage</h1>
        {broncoCard}
      </div>

      <div className="stages">
        <h1>Avalanche Stage</h1>
        {avCard}
      </div>

      <div className="stages">
        <h1>Rockies Stage</h1>
        {rockieCard}
      </div>

      <div className="stages">
        <h1>Nuggets Stage</h1>
        {nuggetCard}
      </div>
    </div>
  );
}

export default Schedule;
