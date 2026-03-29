import { Suspense } from "react";
import "./App.css";
import Banner from "./component/banner/Banner";
import Footer from "./component/footer/Footer";
import Modal from "./component/modal/Modal";
import NavBar from "./component/navbar/NavBar";
import { ToastContainer } from "react-toastify";
import TabBTN from "./tabBTN/TabBTN";
import Cart from "./component/cart/Cart";
const faceModal = async () => {
  const res = await fetch("/public/models.json");
  return res.json();
};

function App() {
  const getModal = faceModal();
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen">
            <span className="loading loading-spinner loading-xl w-1s/12"></span>
          </div>
        }
      >
        <TabBTN getModal={getModal}></TabBTN>
      </Suspense>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
