import "./App.css";
import Banner from "./component/banner/Banner";
import Footer from "./component/footer/Footer";
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
      <Transparent></Transparent>
      <Ready></Ready>
      <Footer></Footer>
    </>
  );
}

export default App;
