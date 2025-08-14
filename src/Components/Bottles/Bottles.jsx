import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import { addToLS, getStoreCard } from "../../Utlitits/localSorage";
import Card from "../Card/Card";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [card, setCard] = useState([]);

  useEffect(() => {
    fetch("bottle.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  // event Handle
  const handelAddToCard = (bottle) => {
    const newCard = [...card, bottle];
    setCard(newCard);
    addToLS(bottle.id);
  };

  // load Card from Local Storage
  useEffect(() => {
    console.log("called The use effect", bottles.length);
    if (bottles.length > 0) {
      const storeCard = getStoreCard();
      // console.log(storeCard);

      const saveCard = [];
      for (const id of storeCard) {
        console.log(id);
        const bottle = bottles.find((bottle) => bottle.id === id);
        if (bottle) {
          saveCard.push(bottle);
        }
      }

      console.log("Save Card", saveCard);
      setCard(saveCard);
    }
  }, [bottles]);
  return (
    <div>
      <h2>Bottles Are : {bottles.length} </h2>
      <Card card={card}></Card>
      <div className="product">
        {bottles.map((bottle, index) => (
          <Bottle
            key={index}
            bottle={bottle}
            handelAddToCard={handelAddToCard}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
