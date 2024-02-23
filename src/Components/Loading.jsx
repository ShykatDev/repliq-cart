import { AiOutlineLoading3Quarters } from "react-icons/ai";
const Loading = ({ message }) => {
  return (
    <div className="flex items-center gap-3">
      <AiOutlineLoading3Quarters className=" animate-spin" />{" "}
      <span>{message}</span>
    </div>
  );
};

export default Loading;
