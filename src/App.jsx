import VisionMission from "./Components/VisionMission/VisionMission";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer2";
import CardLayout from "./Components/Cards/Cards";
import LogoSlider from "./Components/Products/Products";
import BioProducts from "./Components/BioProducts/BioProducts";
function App() {
  return (
      <div className="bg-green h-auto w-full overflow-hidden bg-amber-100">
        <Navbar/>
        <VisionMission/>
        <BioProducts/>
        <LogoSlider/>
        <CardLayout/>
        <Footer/>
      </div>
        )
      }

export default App;
