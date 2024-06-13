import "./App.css";
import Engine from "./components/templates/Engine";
import Hero from "./components/templates/Hero";

const App = () => {
  return (
    <main>
      <div className="main"></div>
      <div className="app text-black z-10 border-black">
        <Hero />
        <Engine />
      </div>
    </main>
  );
};

export default App;
