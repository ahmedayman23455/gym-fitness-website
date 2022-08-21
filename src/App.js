import { useEffect } from "react";
import { Home } from "../src/pages";
import AOS from "aos";
import "aos/dist/aos.css";
import "../src/styles/main.scss";

/* ------------------------------------------------------ */
function App() {

  // useEffect
  useEffect(() => {
    AOS.init({duration: 1000 , once: false});
  }, []);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
