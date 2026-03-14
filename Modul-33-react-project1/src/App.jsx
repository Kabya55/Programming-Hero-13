import { Suspense } from "react";
import "./App.css";
import Countries from "./components/Countries/Countries";

const countryPromise = fetch(
  "https://openapi.programming-hero.com/api/all",
).then((res) => res.json());
function App() {
  return (
    <>
      <h1>Kabya</h1>
      <Suspense fallback={<p>waiting for message...</p>}>
        <Countries countryPromise={countryPromise}></Countries>
      </Suspense>
    </>
  );
}

export default App;
