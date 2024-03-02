import About from "./components/About";
import BestTea from "./components/BestTea";
import DoubleGoodness from "./components/DoubleGoodness";
import Footer from "./components/Footer";
import GreenTeaVideo from "./components/GreenTeaVideo";
import Header from "./components/Header";
import Hero from "./components/Hero";
import JoinUs from "./components/JoinUs";
import LoveHeart from "./components/LoveHeart";
import Matcha from "./components/Matcha";
import TeaWorld from "./components/TeaWorld";
import ThreeImages from "./components/ThreeImages";

const App = () => {
  return (
    <div id="home">
      <Header />
      <Hero />
      <DoubleGoodness />
      <LoveHeart />
      <About />
      <TeaWorld />
      <Matcha />
      <ThreeImages />
      <GreenTeaVideo />
      <BestTea />
      <JoinUs />
      <Footer />
    </div>
  );
};

export default App;
