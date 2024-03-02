import { BrowserRouter as Router } from "react-router-dom";
import About from "./components/About";
import DoubleGoodness from "./components/DoubleGoodness";
import GreenTeaVideo from "./components/GreenTeaVideo";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LoveHeart from "./components/LoveHeart";
import Macha from "./components/Macha";
import ThreeImages from "./components/ThreeImages";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Hero />
        <DoubleGoodness />
        <LoveHeart />
        <About />
        <Macha />
        <ThreeImages />
        <GreenTeaVideo />
      </div>
    </Router>
  );
};

export default App;
