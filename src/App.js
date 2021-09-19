import "./App.css";
import "./components/sass/style.css";
import Flexbox from "./components/flexbox/Flexbox";
import ClickCounter from "./components/HOC/ClickCounter";
import CommentCounter from "./components/HOC/CommentCounter";
import Sass from "./components/sass/Sass";
import { ContextProvider } from "./context/DemoContext";

const App = () => {
  return (
    <ContextProvider>
      <div>
        <Sass />
      </div>
    </ContextProvider>
  );
};

export default App;
