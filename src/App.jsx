import About from "./Components/About/About";
import Home from "./Components/Home/home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";
import Experience from "./Components/Experience/Experience";

function App() {
  return (
      <div className="bg-green h-auto w-full overflow-hidden">
        <Navbar/>
        <Home/>
        <About/>
        <Experience/>
        <Projects/>
        <Footer/>

      </div>
        )
      }

export default App;
