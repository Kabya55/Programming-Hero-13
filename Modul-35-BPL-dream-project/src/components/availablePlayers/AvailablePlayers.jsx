import React from "react";
import Card from "../card/Card";

const AvailablePlayers = ({
  datas,
  setCoin,
  coin,
  selectedPlayers,
  setSelectedPlayers,
}) => {
  return (
    <>
      <div className="grid md:grid-cols-3 gap-5">
        {datas.map((data, index) => {
          return (
            <Card
              key={index}
              dataIndex={data}
              setCoin={setCoin}
              coin={coin}
              setSelectedPlayers={setSelectedPlayers}
              selectedPlayers={selectedPlayers}
            ></Card>
          );
        })}
      </div>
    </>
  );
};

export default AvailablePlayers;
