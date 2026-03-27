import React from "react";

const SlectedPlayerCard = ({
  selectedPlayer,
  setSelectedPlayers,
  selectedPlayers,
  setCoin,
  coin,
}) => {
  const handelDeleteBtn = (selectedPlayer) => {
    const filteredPlayer = selectedPlayers.filter(
      (selectedPlayers) =>
        selectedPlayers.playerName != selectedPlayer.playerName,
    );
    setSelectedPlayers(filteredPlayer);
    setCoin(coin + selectedPlayer.price);
  };
  return (
    <>
      <div className="w-full max-w-3xl mx-auto bg-gray-100 rounded-xl p-4 flex items-center justify-between shadow-sm">
        {/* Left Side */}
        <div className="flex items-center gap-4">
          {/* Image Placeholder */}
          <div className="w-12 h-12 bg-gray-300 rounded-md">
            <img src={selectedPlayer?.playerImg} alt="" />
          </div>

          {/* Player Info */}
          <div>
            <h2 className="font-semibold text-gray-800">
              {selectedPlayer?.playerName}
            </h2>
            <p className="text-sm text-gray-500">
              {selectedPlayer?.battingStyle}
            </p>
          </div>
        </div>

        {/* Right Side Delete Icon */}
        <button
          className="text-red-500 text-lg hover:text-red-600"
          onClick={() => handelDeleteBtn(selectedPlayer)}
        >
          🗑️
        </button>
      </div>
    </>
  );
};

export default SlectedPlayerCard;
