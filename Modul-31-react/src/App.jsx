import "./App.css";
import Details from "./consat";

function App() {
  return (
    <>
      <h1>Kabya</h1>
      <Details name="Kabya" age="28" gender="Male" />
      <Details name="Sona" age="17" gender="Female" />
      <Details name="Tandra" age="22" gender="Female" />
      {/* <ParsonDitals name="Kabya" age="28" gender="Male" />
      <ParsonDitals name="Tandra" age="22" gender="Female" /> */}
      <Phone name="Samsung" price="160,000" />
      <Phone name="Xiomi" price="50,000" />
    </>
  );
}

function ParsonDitals(props) {
  return (
    <div className="person">
      <h1>Name: {props.name}</h1>
      <h2>Age: {props.age}</h2>
      <h2>Gender: {props.gender}</h2>
    </div>
  );
}

function Phone({ name, price }) {
  return (
    <div className="person">
      <h1>Phone Details</h1>
      <h2>Name: {name}</h2>
      <h2>price: {price}</h2>
    </div>
  );
}

export default App;
