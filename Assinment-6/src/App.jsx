import "./App.css";
import Banner from "./component/banner/Banner";
import Footer from "./component/footer/Footer";
import GetStarted from "./component/getStarted/GetStarted";
import NavBar from "./component/navbar/NavBar";
import Rating from "./component/rating/Rating";
import Ready from "./component/ready/Ready";
import Transparent from "./component/transparent/Transparent";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Rating></Rating>
      <GetStarted></GetStarted>
      <Transparent></Transparent>
      <Ready></Ready>
      <Footer></Footer>
    </>
  );
}

export default App;
