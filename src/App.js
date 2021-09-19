import "./App.css";
import ClickCounter from "./components/HOC/ClickCounter";
import CommentCounter from "./components/HOC/CommentCounter";
import { ContextProvider } from "./context/DemoContext";

const App = () => {
  return (
    <ContextProvider>
      <div></div>
    </ContextProvider>
  );
};

export default App;
