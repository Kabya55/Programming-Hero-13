import React from "react";
import SlectedPlayerCard from "../slectedPlayerCard/SlectedPlayerCard";

const SelectedPlayer = ({
  selectedPlayers,
  setSelectedPlayers,
  setCoin,
  coin,
}) => {
  return (
    <>
      <div className="space-y-4">
        {selectedPlayers.length === 0 ? (
          <div className="text-center">
            <h1 className="font-bold"> No Players Slected</h1>
            <p>Go to Availablr tab to select players</p>
          </div>
        ) : (
          selectedPlayers.map((selectedPlayer, index) => {
            return (
              <SlectedPlayerCard
                selectedPlayer={selectedPlayer}
                setSelectedPlayers={setSelectedPlayers}
                selectedPlayers={selectedPlayers}
                key={index}
                setCoin={setCoin}
                coin={coin}
              ></SlectedPlayerCard>
            );
          })
        )}
      </div>
    </>
  );
};

export default SelectedPlayer;
