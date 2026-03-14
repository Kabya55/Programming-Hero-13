import React, { use } from "react";
import Countri from "../Countri/Countri";
import "./Countries.css";

const Countries = ({ countryPromise }) => {
  const allCountriseData = use(countryPromise);
  const allCountrise = allCountriseData.countries;
  return (
    <div>
      <h1>Total Countries: {allCountrise.length}</h1>
      <div className="countries">
        {allCountrise.map((countri) => (
          <Countri key={countri.ccn3.ccn3} countri={countri}></Countri>
        ))}
      </div>
    </div>
  );
};

export default Countries;
