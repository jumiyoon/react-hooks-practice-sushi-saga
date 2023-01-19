import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setSushis(data));
  }, [])

  const [ sushis, setSushis ] = useState([]);
  const [ currentBelt, setCurrentBelt ] = useState(0); // when new sushi button is clicked, it should update by +4
  const [ remainingBudget, setRemainingBudget ] = useState(100);

  function getMoreSushi() {
    console.log("Brought more sushi")
    setCurrentBelt(currentBelt+4);
  }

  function removeSushi(piece) {
    const remainingMoney = remainingBudget - piece.price;

    if (!piece.eaten && remainingMoney >= 0) {
      setRemainingBudget(remainingMoney);

      setSushis(
        sushis.map((sushi) =>
          sushi.id === piece.id ? { ...sushi, eaten: true } : sushi
        )
      );
    } else if (!piece.eaten && remainingMoney <0) {
      alert("Add more money to your wallet!")
    }
  }

  const eatenSushi = sushis.filter((sushi) => sushi.eaten);


  return (
    <div className="app">
      <SushiContainer
        sushis = {sushis.slice(currentBelt, currentBelt+4)}
        getMoreSushi = {getMoreSushi} 
        removeSushi = {removeSushi} 
      />
      <Table 
        budget = {remainingBudget}
        plates = {eatenSushi}
      />
    </div>
  );
}

export default App;
