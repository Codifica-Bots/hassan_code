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
      <div style={{ height: "40vh", width: "80vw"}}>
        <ChatBot height={"initial"} width={"inherit"} />
      </div>
    </div>
  );
}

export default App;
