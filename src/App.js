import "./App.css";
import "./components/sass/style.css";
import { ContextProvider } from "./context/DemoContext";
import Flexbox from "./components/flexbox/Flexbox";
import DemoArrayMethods from "./components/DemoArrayMethods";
import ClickCounter from "./components/HOC/ClickCounter";
import HoverCounter from "./components/HOC/HoverCounter";
const App = () => {
  return (
    <>
      {/* <ContextProvider>
        <div>
          <DemoArrayMethods />
        </div>
      </ContextProvider> */}
      <ClickCounter />
      <HoverCounter />
    </>
  );
};

export default App;
