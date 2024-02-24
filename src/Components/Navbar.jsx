import { useContext } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../context";

const Navbar = () => {
  const { cartProducts } = useContext(CartContext);

  return (
    <div className="h-[10vh] flex items-center">
      <div className="container flex justify-between items-center">
        <h2>
          <NavLink to="/">Home</NavLink>
        </h2>

        <div className="flex gap-5">
          <Link
            to="/cart"
            className="group p-2 rounded-full duration-300 cursor-pointer hover:bg-neutral-800 relative border"
          >
            <CiShoppingCart className="text-[18px] xl:text-xl duration-300 group-hover:text-white" />
            <span className=" absolute -top-2 -right-1 text-indigo-500 rounded-md bg-white text-sm font-semibold px-1">
              {cartProducts.length > 0 && cartProducts.length}
            </span>
          </Link>

          <img
            src="https://avatars.githubusercontent.com/u/124599?v=4"
            alt="avatar"
            className="w-10 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
