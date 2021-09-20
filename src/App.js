import "./App.css";
import "./components/sass/style.css";
import { ContextProvider } from "./context/DemoContext";

import Flexbox from "./components/flexbox/Flexbox";
import DemoArrayMethods from "./components/DemoArrayMethods";
const App = () => {
  return (
    <ContextProvider>
      <div>
        <DemoArrayMethods />
      </div>
    </ContextProvider>
  );
};

export default App;
