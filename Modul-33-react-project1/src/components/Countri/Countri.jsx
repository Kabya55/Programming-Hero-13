import React, { useState } from "react";
import "./countri.css";

const Countri = ({ countri, handleVisitedCountri }) => {
  const [visited, setvisited] = useState(false);
  //   console.log(countri.name.common);
  const handleVisite = () => {
    // Not Visited thakla sudu Visited dhakabo
    // setvisited(true);
    // jodi 2 ta e korta chai click ak aber visited hobea are ak abar click korla Not Visited hoba

    // simpal sistem

    // if (visited) {
    //   setvisited(false);
    // } else {
    //   setvisited(true);
    // }

    // Second system

    setvisited(visited ? false : true);
    handleVisitedCountri(countri);

    // 3rd system

    // setvisited(!visited);
  };
  return (
    <div className={`countri ${visited && "countri-visited"}`}>
      <img src={countri.flags.flags.png} alt={countri.flags.flags.alt} />
      <div>
        <h2>Countri Name: {countri.name.common}</h2>
        <p>Population: {countri.population.population}</p>
        <p>Capital: {countri.capital.capital}</p>
        <p>Region: {countri.region.region}</p>
        <p>
          Area: {countri.area.area}{" "}
          {countri.area.area > 30000 ? "Big Countri" : "Smoll Countri"}
        </p>
        <button className="btn" onClick={handleVisite}>
          {visited ? "Visited" : "Not Visited"}
        </button>
      </div>
    </div>
  );
};

export default Countri;
