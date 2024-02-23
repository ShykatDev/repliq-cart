import CustomButton from "../Components/Button";
import CartItem from "../Components/CartItem";

const Cart = () => {
  return (
    <div className="container">
      <h2 className="text-5xl font-semibold mb-6">My Cart</h2>
      <div className="flex flex-col-reverse md:flex-row gap-10 items-start">
        <div className="w-full md:w-[80%]">
          <div className="border rounded-xl px-6 py-3 flex justify-between items-center">
            <p className="font-semibold">
              Total Item: <span>100</span>
            </p>
            <CustomButton>Delete All</CustomButton>
          </div>

          <div className="">
            <CartItem />
            <CartItem />
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-[20%] border p-3 rounded-lg">
          <p className="text-xl font-semibold">Summury Order</p>
          <div className="flex justify-between items-center my-3">
            <p>Subtotal:</p>
            <p className="text-xl font-semibold">$ 100</p>
          </div>

          <button className="w-full bg-neutral-950 rounded-full py-3 text-neutral-100">
            Buy Now (3)
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
