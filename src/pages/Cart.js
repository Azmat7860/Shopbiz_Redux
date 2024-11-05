import { CartCard } from "../components";
import { useSelector } from "react-redux";

export const Cart = () => {
  const cartList = useSelector((state) => state.cartState.cartList);
  const total = useSelector((state) => state.cartState.total);

  return (
    <main className="container mx-auto p-6 bg-gray-100">
      <h1 className="text-2xl font-semibold mb-4">Cart Items</h1>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Cart Items Section */}
        <div className="md:w-3/4 min-h-44">
          {cartList.length > 0 ? (
            cartList.map((product) => (
              <CartCard key={product.id} product={product} />
            ))
          ) : (
            <div className="flex justify-center items-center h-48 bg-white shadow-md rounded-lg p-4">
              <p className="text-gray-700 text-center text-lg">
                Your cart is currently empty. Start adding some amazing
                products!
              </p>
            </div>
          )}
        </div>

        {/* Cart Summary Section */}
        {cartList.length > 0 && (
          <div className="md:w-1/4 bg-white shadow-md rounded-lg p-4 h-fit">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Summary
            </h2>
            <div className="text-gray-700 mb-2">
              <p className="flex justify-between">
                <span>Total Items:</span>
                <span>{cartList.length}</span>
              </p>
              <p className="flex justify-between font-bold">
                <span>Total Amount:</span>
                <span>${total.toFixed(2)}</span>
              </p>
            </div>

            <button
              type="button"
              className="w-full rounded-md mt-4 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </main>
  );
};
