import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);

  useEffect(() => {
    fetch("bottle.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);
  return (
    <div>
      <h2>Bottles Here: {bottles.length} </h2>
      <div className="product">
        {bottles.map((bottle, index) => (
          <Bottle key={index} bottle={bottle}></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
