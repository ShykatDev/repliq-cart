import { IoBagHandle } from "react-icons/io5";
import header from "../assets/header.png";

const Header = () => {
  return (
    <div className="md:h-[60vh] w-full bg-gradient-to-r from-neutral-900 to-neutral-700 rounded-2xl p-6 md:p-16 mb-10 flex flex-col-reverse md:flex-row justify-between items-center">
      <div className="md:w-2/5">
        <div className="size-10 md:size-14 flex justify-center items-center bg-neutral-700 rounded-full mb-3 border border-neutral-500">
          <IoBagHandle className="text-xl md:text-3xl text-neutral-400 " />
        </div>
        <h2 className="text-neutral-100 text-2xl md:text-5xl font-semibold italic">
          EasyMart{" "}
        </h2>
        <p className="text-neutral-400 mt-6 text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          tempore cumque iste aliquam, veritatis beatae. Corrupti nemo ex
          veritatis animi.
        </p>

        <button className="px-6 md:px-10 py-2.5 md:py-3 mt-10 bg-neutral-400 rounded-lg font-semibold duration-300 hover:bg-neutral-200">
          Shop Now
        </button>
      </div>
      <div className="md:w-3/5 flex justify-center md:justify-end items-center">
        <img src={header} alt="" className="w-3/5" />
      </div>
    </div>
  );
};

export default Header;
