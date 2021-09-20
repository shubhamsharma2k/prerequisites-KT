import "./App.css";
import "./components/sass/style.css";
import { ContextProvider } from "./context/DemoContext";
import DemoLodash from "./components/DemoLodash";
import ClickCounter from "./components/HOC/ClickCounter";
const App = () => {
  return (
    <ContextProvider>
      <div>
        <ClickCounter />
      </div>
    </ContextProvider>
  );
};

export default App;
