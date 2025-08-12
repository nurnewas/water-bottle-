import { useEffect, useState } from "react";

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
    </div>
  );
};

export default Bottles;
