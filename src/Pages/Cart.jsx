import { useContext, useState } from "react";
import CustomButton from "../Components/Button";
import CartItem from "../Components/CartItem";
import { CartContext } from "../context";
import Confirmation from "../Components/Confirmation";

const Cart = () => {
  const { cartProducts, setCartProducts, deleteConfim, setDeleteConfim } =
    useContext(CartContext);

  const [itemToDelete, setItemToDelete] = useState(null);

  let content;

  let totalPrice = cartProducts.reduce(
    (total, el) => total + el.price * el.quantity,
    0
  );

  const increaseQuantity = (item) => {
    const updatedItem = cartProducts.map((el) => {
      if (el.id === item.id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      } else {
        return el;
      }
    });

    setCartProducts(updatedItem);
  };

  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      const updatedItem = cartProducts.map((el) => {
        if (el.id === item.id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        } else {
          return el;
        }
      });

      setCartProducts(updatedItem);
    }
  };

  const deleteItem = (itemID) => {
    const updatedItems = cartProducts.filter((el) => el.id !== itemID);

    setCartProducts(updatedItems);
  };

  if (cartProducts.length === 0) {
    content = (
      <div className="container min-h-[20vh]">
        <h2 className="text-5xl font-semibold mb-6">My Cart</h2>

        <p className="text-neutral-400">No item found in the cart!</p>
      </div>
    );
  } else {
    content = (
      <div className="container">
        <Confirmation cartElement={itemToDelete} handleDel={deleteItem} />

        <h2 className="text-5xl font-semibold mb-6">My Cart</h2>

        <div className="flex flex-col-reverse md:flex-row gap-10 items-start">
          <div className="w-full md:w-[80%]">
            <div className="border rounded-xl px-6 py-3 flex justify-between items-center">
              <p className="font-semibold">
                Total Item:{" "}
                <i className="text-indigo-500">{cartProducts.length}</i>
              </p>
              <div
                onClick={() =>
                  setDeleteConfim({
                    ...deleteConfim,
                    status: true,
                    mode: "deleteAll",
                  })
                }
              >
                <CustomButton>Delete All</CustomButton>
              </div>
            </div>

            <div className="">
              {cartProducts.length > 0 &&
                cartProducts.map((el) => {
                  return (
                    <CartItem
                      cartElement={el}
                      key={el.id}
                      handleInc={increaseQuantity}
                      handleDec={decreaseQuantity}
                      setItemToDelete={setItemToDelete}
                    />
                  );
                })}
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-[20%] border p-3 rounded-lg">
            <p className="text-xl font-semibold">Summury Order</p>
            <div className="flex justify-between items-center my-3">
              <p>Subtotal:</p>
              <p className="text-xl font-semibold">$ {totalPrice.toFixed(2)}</p>
            </div>

            <button className="w-full bg-neutral-950 rounded-full py-3 text-neutral-100">
              Buy Now ({cartProducts.length})
            </button>
          </div>
        </div>
      </div>
    );
  }

  return content;
};

export default Cart;
