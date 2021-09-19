import "./App.css";
import "./components/sass/style.css";
import { ContextProvider } from "./context/DemoContext";
import DemoLodash from "./components/DemoLodash";

const App = () => {
  return (
    <ContextProvider>
      <div>
        <DemoLodash />
      </div>
    </ContextProvider>
  );
};

export default App;
