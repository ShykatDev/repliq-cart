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
          <NavLink to="/" className="text-xl">Home</NavLink>
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

          <div className="relative group">
            <img
              src="https://avatars.githubusercontent.com/u/124599?v=4"
              alt="avatar"
              className="w-10 rounded-full cursor-pointer"
            />
            <div className="opacity-0 group-hover:opacity-100 duration-300 absolute top-full w-48 text-end right-0  pt-3 ">
              <div className="border rounded-md p-3 bg-neutral-50">
                <small className="">
                  Design and Developed by{" "}
                  <a
                    href="https://www.linkedin.com/in/shykat-raha1/"
                    target="_blank"
                    className="font-semibold underline"
                  >
                    Shykat Raha
                  </a>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
