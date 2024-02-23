import { useState } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Subscribe from "./Components/Subscribe";
import { Outlet } from "react-router-dom";
import { CartContext } from "./context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cartProducts, setCartProducts] = useState([]);
  const [deleteConfim, setDeleteConfim] = useState({
    mode:"",
    status:false
  });
  return (
    <>
      <CartContext.Provider
        value={{ cartProducts, setCartProducts, deleteConfim, setDeleteConfim }}
      >
        <Navbar />
        <Outlet />
        <Subscribe />
      </CartContext.Provider>
      <Footer />
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;
