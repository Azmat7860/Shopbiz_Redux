import React, { useEffect, useState } from "react";
import {add, remove} from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartList = useSelector(state => state.cartState.cartList)
  
  const [isInCart, setIsInCart] = useState(false);
  const { id, name, price, image } = product;

  useEffect(() => {
    const productIsInCart = cartList.find((item) => item.id === id);
    if (productIsInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [cartList, id]);

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-200">
      <img src={image} alt={name} className="w-full h-60 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-600">${price.toFixed(2)}</p>
        <p
          className={`mt-2 text-sm ${
            product.inStock ? "text-green-600" : "text-red-600"
          }`}
        >
          {product.inStock ? "In Stock" : "Out of Stock"}
        </p>  
        {isInCart ? (
          <button
            className="bg-red-500 mt-4 w-full py-2 px-4 text-white rounded"
            onClick={() => dispatch(remove(product))}
          >
            Remove
          </button>
        ) : (
          <button
            className={`mt-4 w-full py-2 px-4 text-white rounded ${
              product.inStock
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            onClick={() => dispatch(add(product))}
            disabled={!product.inStock}
          >
            {product.inStock ? "Add to Cart" : "Out of Stock"}
          </button>
        )}
      </div>
    </div>
  );
};
