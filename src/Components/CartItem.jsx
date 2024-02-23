import { FaHeart, FaMinus, FaPlus, FaStar, FaTrash } from "react-icons/fa6";

const CartItem = () => {
  return (
    <div className="mt-6 border p-6 flex justify-between items-center rounded-lg">
      <div className="flex gap-6 items-center">
        <img src="" alt="" className="w-20 h-20 rounded-lg" />
        <div>
          <small className="px-4 py-1 rounded-full font-semibold border">
            Category
          </small>

          <h1 className="pt-3 font-semibold">Product Name</h1>
          <p className="flex items-center gap-1">
            {" "}
            <FaStar className="text-amber-400" /> Rating
          </p>
        </div>
      </div>
      <div className="text-end">
        <small>Price</small>
        <p className="font-semibold text-xl">$1000</p>

        <div className="flex items-center gap-4 mt-2">
          <span>
            <FaTrash className="text-neutral-300 duration-300 hover:text-neutral-800 cursor-pointer" />
          </span>
          <span>
            <FaHeart className="text-neutral-300 duration-300 hover:text-neutral-800 cursor-pointer" />
          </span>

          <div className="flex items-center gap-1 bg-neutral-100 border rounded-md">
            <div className="p-2 bg-neutral-100 cursor-pointer">
              <FaMinus />
            </div>
            <div className="px-4 bg-neutral-100">1</div>
            <div className="p-2 bg-neutral-100 cursor-pointer">
              <FaPlus />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
