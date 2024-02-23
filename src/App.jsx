import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Subscribe from "./Components/Subscribe";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
