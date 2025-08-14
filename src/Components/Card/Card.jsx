import "./Card.css";
const Card = ({ card }) => {
  return (
    <div>
      <h3>Card: {card.length}</h3>
      <div className="card-container ">
        {card.map((bottle) => (
          <img src={bottle.img}></img>
        ))}
      </div>
    </div>
  );
};

export default Card;
