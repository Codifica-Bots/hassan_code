import Navbar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import VideoDemoSection from "./components/VideoDemoSection";
import LiveDemoSection from "./components/LiveDemoSection";
import ChatBot from "./components/ChatBot";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <VideoDemoSection />
      <LiveDemoSection />
    </div>
  );
}

export default App;
