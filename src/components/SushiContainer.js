import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushis, getMoreSushi, removeSushi }) {

  const sushiData = sushis.map((sushi) => {
    return (
      <Sushi
        key={sushi.id}
        sushi={sushi}
        removeSushi={removeSushi}
      />
    )
  })

  return (
    <div className="belt">
      {sushiData}
      <MoreButton getMoreSushi={getMoreSushi} />
    </div>
  );
}

export default SushiContainer;
