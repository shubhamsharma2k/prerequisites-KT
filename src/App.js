import "./App.css";
import DemoUseEffect from "./components/DemoUseEffect";
import DemoUseState from "./components/DemoUseState";
import DemoMoviesList from "./components/DemoMoviesList";
import DemoES6 from "./components/DemoES6";
import DemoForm from "./components/DemoForm";
import { ContextProvider } from "./context/DemoContext";

const App = () => {
  return (
    <ContextProvider>
      <div>
        <DemoUseState />
      </div>
    </ContextProvider>
  );
};

export default App;
