import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";


function PlantPage() {
  const [plants, setPlants] = useState([]);

  const plantUrl = "http://localhost:6001/plants"

  useEffect(() => {
    fetch(plantUrl)
      .then(res => res.json())
      .then((data) => setPlants(data))
  },[]);

  function addPlant(newPlant) {
    setPlants([...plants, newPlant])
  }

  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
