import "./App.css";
import Flexbox from "./components/flexbox/Flexbox";
import ClickCounter from "./components/HOC/ClickCounter";
import CommentCounter from "./components/HOC/CommentCounter";
import { ContextProvider } from "./context/DemoContext";

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
