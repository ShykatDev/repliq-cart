import { FaStar } from "react-icons/fa6";
import { IoCart, IoCartOutline } from "react-icons/io5";
import CustomButton from "./Button";
import { useContext } from "react";
import { CartContext } from "../context";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const { title, image, category, price, rating } = product;
  const { cartProducts, setCartProducts } = useContext(CartContext);

  let match;

  const handleAddtoCart = () => {
    const matchProduct = cartProducts.some((element) => {
      if (element.id === product.id) {
        return true;
      }

      return false;
    });

    if (!matchProduct) {
      setCartProducts([
        ...cartProducts,
        {
          ...product,
          quantity: 1,
        },
      ]);

      toast.success("Product Added Successfully!");
    }
  };

  cartProducts.map((el) => {
    if (el.id === product.id) {
      match = true;
    }
  });

  return (
    <div className="border rounded-xl">
      <div className="border-neutral-100">
        <div className="relative">
          <div className="rounded-tl-xl rounded-tr-xl bg-neutral-100 flex justify-center items-center min-h-[18rem] p-3">
            <img
              src={image}
              alt={title}
              className="w-full h-[17rem] rounded-md"
            />
          </div>
        </div>
        <div className="p-3">
          <p className="font-semibold line-clamp-1">{title}</p>
          <p className="text-sm text-textLight">{category}</p>

          <div className="flex justify-between items-center mt-3">
            <p className="price px-3 py-1 border-2 rounded-md border-green-400 text-green-600 font-semibold">
              {" "}
              $ {price}
            </p>

            <div className="flex gap-1 items-center">
              <FaStar className="mb-1 text-amber-400" />
              <span className="text-textLight">
                {rating.rate} ({rating.count})
              </span>
            </div>
          </div>
        </div>
        <div className="border-t rounded-bl-xl rounded-br-xl p-3 flex justify-between items-center">
          <div
            className="p-2 rounded-md bg-white border duration-300 cursor-pointer hover:bg-neutral-900 hover:text-white"
            onClick={handleAddtoCart}
          >
            {!match ? (
              <IoCartOutline />
            ) : (
              <button disabled className="flex items-center gap-1 opacity-30">
                <IoCart /> <span className="text-sm">Already in Cart</span>
              </button>
            )}
          </div>
          <CustomButton>Buy Now</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
