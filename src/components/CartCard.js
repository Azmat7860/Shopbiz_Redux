import React from "react";
import { remove } from "../store/cartSlice";
import { useDispatch } from "react-redux";

export const CartCard = ({ product}) => {
  const dispatch = useDispatch();
  const {name, price, image} = product;
  return (
    <div className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg p-4 mb-4">
      {/* Product Image */}
      <img
        src={image}
        alt={name}
        className="w-24 h-24 object-cover rounded-md md:w-32 md:h-32"
      />

      {/* Product Details */}
      <div className="flex flex-col justify-between flex-grow p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-600">Price: ${price.toFixed(2)}</p>
      </div>

      {/* Remove Button */}
      <button
        className="bg-red-500 text-white px-4 py-2 rounded-md mt-4 md:mt-0 md:ml-4 hover:bg-red-600 transition duration-200"
        onClick={() => dispatch(remove(product))}
      >
        Remove
      </button>
    </div>
  );
};

