import { Suspense } from "react";
import "./App.css";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import Players from "./components/players/Players";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

const fatchPlayer = async () => {
  const res = await fetch("/public/data.json");
  return res.json();
};

function App() {
  const playerPromis = fatchPlayer();
  const [coin, setCoin] = useState(50000);
  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Banner></Banner>
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <Players
          playerPromis={playerPromis}
          setCoin={setCoin}
          coin={coin}
        ></Players>
      </Suspense>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
