import React from "react";
import Img from "../../assets/images.webp";
import Flag from "../../assets/flag.png";
import { useState } from "react";
import { toast } from "react-toastify";

const Card = ({
  dataIndex,
  setCoin,
  coin,
  setSelectedPlayers,
  selectedPlayers,
}) => {
  const [playerSelect, setPlayerSelect] = useState(false);
  const handelChusePlayer = () => {
    let newCoin = coin - dataIndex.price;
    if (newCoin >= 0) {
      setCoin(coin - dataIndex.price);
    } else {
      toast.warn("Not enough coin to purchasw this player");
      return;
    }
    setPlayerSelect(true);
    toast.success(`${dataIndex.playerName} is Selected`);
    setSelectedPlayers([...selectedPlayers, dataIndex]);
  };
  return (
    <div>
      <section>
        {/* card Section */}

        <div className="max-w-smnpm bg-gray-100 p-4 rounded-2xl shadow">
          <img
            src={Img}
            alt="Virat Kohli"
            className="w-full h-52 object-cover rounded-xl"
          />

          <div className="flex items-center gap-2 mt-4">
            <span>👤</span>
            <h2 className="font-bold text-lg">{dataIndex.playerName}</h2>
          </div>

          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center gap-2 text-gray-500">
              <span>
                <img src={Flag} alt="" />
              </span>
              <p>{dataIndex.playerCountry}</p>
            </div>

            <span className="bg-gray-200 px-3 py-1 rounded-lg text-sm">
              {dataIndex.playerType}
            </span>
          </div>

          <hr className="my-3" />

          <div className="space-y-2 text-sm">
            <p className="font-semibold">Rating</p>

            <div className="flex justify-between mt-[24px]">
              <p>{dataIndex.battingStyle}</p>
              <p className="text-gray-500">{dataIndex.bowlingStyle}</p>
            </div>

            <div className="flex justify-between items-center mt-[24px]">
              <p className="font-semibold">Price: ${dataIndex.price}</p>

              <button
                onClick={handelChusePlayer}
                className={`btn  ${playerSelect ? "btn btn-primary" : "btn-outline btn-warning"}`}
              >
                {playerSelect ? "Selected Player" : "Choose Player"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;
