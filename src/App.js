import "./App.css";
import "./components/sass/style.css";
import ClickCounter from "./components/HOC/ClickCounter";
import HoverCounter from "./components/HOC/HoverCounter";
import CommentCounter from "./components/HOC/CommentCounter";

const App = () => {
  return (
    <>
      <ClickCounter />
      <CommentCounter />
      <HoverCounter />
    </>
  );
};

export default App;
