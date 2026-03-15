import React, { use } from "react";
import Countri from "../Countri/Countri";
import "./Countries.css";
import { useState } from "react";

const Countries = ({ countryPromise }) => {
  const [totalVisitedCountri, settotalVisitedCountri] = useState([]);
  const handleVisitedCountri = (countri) => {
    const newVisitedCountri = [...totalVisitedCountri, countri];
    settotalVisitedCountri(newVisitedCountri);
  };

  const allCountriseData = use(countryPromise);
  const allCountrise = allCountriseData.countries;

  return (
    <div>
      <h1>Total Countries: {allCountrise.length}</h1>
      <h2>Total Visited Countri: {totalVisitedCountri.length}</h2>
      <ol>
        {totalVisitedCountri.map((countri) => (
          <li key={countri.ccn3.ccn3}>{countri.name.common}</li>
        ))}
      </ol>
      <div className="countries">
        {allCountrise.map((countri) => (
          <Countri
            key={countri.ccn3.ccn3}
            countri={countri}
            handleVisitedCountri={handleVisitedCountri}
          ></Countri>
        ))}
      </div>
    </div>
  );
};

export default Countries;
