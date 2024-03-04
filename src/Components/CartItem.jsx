import { useContext } from "react";
import { FaMinus, FaPlus, FaStar, FaTrash } from "react-icons/fa6";
import { CartContext } from "../context";

const CartItem = ({ cartElement, handleInc, handleDec, setItemToDelete }) => {
  const { title, image, category, price, rating, quantity } = cartElement;
  const { deleteConfim, setDeleteConfim } = useContext(CartContext);

  return (
    <div className="mt-6 border p-6 flex flex-col md:flex-row justify-between md:items-center rounded-lg">
      <div className="flex gap-6 items-center">
        <img src={image} alt="" className="w-20 h-20 rounded-lg" />
        <div>
          <small className="px-4 py-1 rounded-full font-semibold border bg-neutral-100">
            {category}
          </small>

          <h1 className="pt-3 font-semibold">{title}</h1>
          <p className="flex items-center gap-1">
            {" "}
            <FaStar className="text-amber-400" /> {rating?.rate}
          </p>
        </div>
      </div>
      <div className="md:text-end flex md:flex-col justify-between md:justify-start mt-6 md:mt-0">
        <div>
          <small>Price</small>
          <p className="font-semibold text-xl">${price * quantity}</p>
        </div>

        <div className="flex items-center gap-4 mt-2">
          <span
            onClick={() => {
              setDeleteConfim({
                ...deleteConfim,
                status: true,
                mode: "deleteSingle",
              });
              setItemToDelete(cartElement);
            }}
          >
            <FaTrash className="text-red-500 duration-300 hover:text-neutral-800 cursor-pointer" />
          </span>

          <div className="flex items-center gap-1 bg-neutral-100 border rounded-md">
            <div
              className="p-2 bg-neutral-100 cursor-pointer"
              onClick={() => handleDec(cartElement)}
            >
              <FaMinus />
            </div>
            <div className="px-4 bg-neutral-100">{quantity}</div>
            <div
              className="p-2 bg-neutral-100 cursor-pointer"
              onClick={() => handleInc(cartElement)}
            >
              <FaPlus />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
