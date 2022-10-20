import React, {useState} from "react";
import PlantList from "./PlantList";

function PlantCard({ plant }) {

const [isClicked, setIsClicked] = useState(true)

function handleClick() {
  setIsClicked(!isClicked)
}

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {isClicked ? (
        <button onClick={handleClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
