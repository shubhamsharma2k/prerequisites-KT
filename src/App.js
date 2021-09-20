import "./App.css";
import "./components/sass/style.css";
import { ContextProvider } from "./context/DemoContext";

import Flexbox from "./components/flexbox/Flexbox";
const App = () => {
  return (
    <ContextProvider>
      <div>
        <Flexbox />
      </div>
    </ContextProvider>
  );
};

export default App;
