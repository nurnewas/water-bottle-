import "./Bottle.css";

const Bottle = ({ bottle }) => {
  const { name, img, price, stock } = bottle;
  return (
    <div className="bottle">
      <h3>bottle Name: {name}</h3>
      <p>Price: {price}</p>
      <p>Stock: {stock}</p>
      <img src={img} alt="" />
    </div>
  );
};

export default Bottle;
