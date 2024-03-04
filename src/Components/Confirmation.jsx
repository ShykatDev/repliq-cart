import { useContext } from "react";
import { CartContext } from "../context";
import { toast } from "react-toastify";

const Confirmation = ({ cartElement, handleDel }) => {
  const { deleteConfim, setDeleteConfim, setCartProducts } =
    useContext(CartContext);

  return (
    <div
      className={`fixed z-50 bottom-0 md:bottom-10 flex justify-center items-center duration-300 ease-out ${
        deleteConfim.status ? "right-0 md:right-10 opacity-100 visible" : "-right-full opacity-0 invisible"
      }`}
    >
      <div className="p-6 bg-white rounded-lg shadow-md border">
        <p>
          Do you want to delete{" "}
          <span className="font-semibold">
            {deleteConfim.mode === "deleteSingle" &&
              cartElement &&
              cartElement.title}
            {deleteConfim.mode === "deleteAll" && "ALL"}
          </span>
          ?
        </p>

        <div className="mt-3 border-t pt-3 flex justify-end gap-6 items-center">
          <button
            className="text-red-400 cursor-pointer"
            onClick={() => setDeleteConfim({ ...deleteConfim, status: false })}
          >
            No
          </button>
          <button
            className="text-indigo-500 font-semibold cursor-pointer"
            onClick={() => {
              if (deleteConfim.mode === "deleteSingle") {
                handleDel(cartElement.id);
                setDeleteConfim({ ...deleteConfim, mode: "", status: false });
                toast.success("Removed successfully");
              } else {
                setCartProducts([]);
                setDeleteConfim({ ...deleteConfim, mode: "", status: false });
                toast.success("Removed successfully");
              }
            }}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
