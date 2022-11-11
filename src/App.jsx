import "./App.css";
import Navbar from "./components/Navbar";
import PickArea from "./components/PickArea";
import ResultArea from "./components/ResultArea";
import Rules from "./components/Rules";
import RulesButton from "./components/RulesButton";
import { useGlobalContext } from "./context";

function App() {
  const { rulesIsOpen, choice } = useGlobalContext();
  return (
    <>
      {rulesIsOpen ? <Rules /> : undefined}
      <Navbar />
      {choice ? <ResultArea /> : <PickArea />}
      <RulesButton />
    </>
  );
}

export default App;
