import { ToastContainer } from "react-toastify";
import "./App.css";
import Banner from "./component/banner/Banner";
import Footer from "./component/footer/Footer";
import GetStarted from "./component/getStarted/GetStarted";
import NavBar from "./component/navbar/NavBar";
import Rating from "./component/rating/Rating";
import Ready from "./component/ready/Ready";
import Tools from "./component/tools/Tools";
import Transparent from "./component/transparent/Transparent";
import { Suspense, useState } from "react";

const fatchData = async () => {
  const res = await fetch("/models.json");
  return res.json();
};

function App() {
  const promisData = fatchData();
  const [slectedItms, setSlectedItms] = useState([]);
  return (
    <>
      <NavBar slectedItms={slectedItms}></NavBar>
      <Banner></Banner>
      <Rating></Rating>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen">
            <span className="loading loading-spinner loading-xl w-1s/12"></span>
          </div>
        }
      >
        <Tools
          promisData={promisData}
          slectedItms={slectedItms}
          setSlectedItms={setSlectedItms}
        ></Tools>
      </Suspense>
      <GetStarted></GetStarted>
      <Transparent></Transparent>
      <Ready></Ready>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
