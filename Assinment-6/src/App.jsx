import "./App.css";
import Banner from "./component/banner/Banner";
import Footer from "./component/footer/Footer";
import NavBar from "./component/navbar/NavBar";
import Rating from "./component/rating/Rating";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Rating></Rating>
      <Footer></Footer>
    </>
  );
}

export default App;
