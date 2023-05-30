import logo from "./logo.svg";

import Navbar from "./components/Navbar";
import AllRoutes from "./Routes/AllRoutes";
import Footer from "./components/Footer";
import { useContext } from "react";
import { ThemeContext } from "./Context/ThemeContext";

function App() {
  const { isLight } = useContext(ThemeContext);
  return (
    <div className={`App ${isLight ? "light" : "dark"}`}>
      <Navbar />
      <AllRoutes />
      <Footer/>
    </div>
  );
}

export default App;
