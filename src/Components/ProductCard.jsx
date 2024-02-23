import { FaStar, FaRegHeart, FaHeart  } from "react-icons/fa6";
import { CiShoppingCart } from "react-icons/ci";
import CardButton from "./Button";

const ProductCard = ({ product }) => {
  const { title, image, category, price, rating } = product;

  console.log(rating)
  return (
    <div className="px-3 pb-6 ">
      <div className="border-neutral-100">
        <div className="relative">
          <div className="rounded-xl border bg-neutral-100 flex justify-center items-center min-h-[18rem] p-3">
            <img src={image} alt={title} className="w-full h-[17rem] rounded-md" />
          </div>
        </div>
        <div className="p-3">
          <p className="font-semibold">{title}</p>
          <p className="text-sm text-textLight">{category}</p>

          <div className="flex justify-between items-center mt-3">
            <p className="price px-3 py-1 border-2 rounded-md border-green-400 text-green-600 font-semibold">
              {" "}
              $ {price}
            </p>

            <div className="flex gap-1 items-center">
              <FaStar className="mb-1 text-amber-400" />
              <span className="text-textLight">{rating.rate} ({rating.count})</span>
            </div>
          </div>
        </div>
        <div className="border rounded-xl p-3 flex justify-between items-center">
          <div className="flex gap-2">
            <div className="p-2 rounded-md bg-white border duration-300 cursor-pointer hover:bg-neutral-900 hover:text-white">
              <FaRegHeart />
            </div>
            <div className="p-2 rounded-md bg-white border duration-300 cursor-pointer hover:bg-neutral-900 hover:text-white">
              <CiShoppingCart />
            </div>
          </div>
          <CardButton>Buy Now</CardButton>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
