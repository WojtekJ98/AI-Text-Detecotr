import "./App.css";
import Page from "./components/templates/Page";

const App = () => {
  return (
    <main>
      <div className="main"></div>
      <div className="app text-black z-10 border-black">
        <Page />
      </div>
    </main>
  );
};

export default App;
