import React, { use, useState } from "react";
import Img from "../../assets/images.webp";
import Flag from "../../assets/flag.png";
import AvailablePlayers from "../availablePlayers/AvailablePlayers";
import SelectedPlayer from "../selectedPlayer/SelectedPlayer";

const Players = ({ playerPromis, setCoin, coin }) => {
  const datas = use(playerPromis);
  const [selectedType, setSelectedType] = useState("available");
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  return (
    <>
      <div className="w-11/12 m-auto mt-6">
        <section>
          <div className="navbar-start">
            {selectedType === "available" ? (
              <h1 className="text-2xl font-bold">Available Players</h1>
            ) : (
              <h1 className="text-2xl font-bold">
                Selected Player ({selectedPlayers.length}/{datas.length})
              </h1>
            )}
          </div>
          <div className="navbar-end gap-2">
            <button
              onClick={() => setSelectedType("available")}
              className={`btn btn-outline ${selectedType === "available" ? "bg-amber-300" : ""} mt-[24px] mb-[64px]`}
            >
              Available
            </button>
            <button
              onClick={() => setSelectedType("selected")}
              className={`btn btn-outline ${selectedType === "selected" ? "bg-amber-300" : ""} mt-[24px] mb-[64px]`}
            >
              Selected ({selectedPlayers.length})
            </button>
          </div>
        </section>
        {selectedType === "available" ? (
          <AvailablePlayers
            datas={datas}
            setCoin={setCoin}
            coin={coin}
            setSelectedPlayers={setSelectedPlayers}
            selectedPlayers={selectedPlayers}
          ></AvailablePlayers>
        ) : (
          <SelectedPlayer
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
            setCoin={setCoin}
            coin={coin}
          ></SelectedPlayer>
        )}
      </div>
    </>
  );
};

export default Players;
