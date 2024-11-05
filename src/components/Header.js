import { NavLink } from "react-router-dom";
import logo from "../assets/logo.webp";
import { useSelector } from "react-redux";

export const Header = () => {
  const cartList = useSelector(state => state.cartState.cartList)

  return (
    <header className="bg-white shadow-md border border-b-2 border-gray-200 px-2 py-1">
      <div className="mx-auto flex items-center justify-between flex-wrap">
        {/* Logo Section */}
        <div className="flex items-center mx-2">
          <NavLink to="/">
            <img className="h-20 w-20 rounded-full" src={logo} alt="shopbizz" />
          </NavLink>
        </div>

        {/* Navigation Section */}
        <nav className="flex space-x-6 text-gray-700 text-md sm:text-lg font-bold me-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "bg-blue-100 text-blue-600 px-2 py-1 rounded transition-all duration-200"
                : "text-gray-700 hover:text-blue-500 px-2 py-1 transition-all duration-200"
            }
          >
            Home
          </NavLink>

          {/* Cart Link with Counter */}
          <div className="relative">
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive
                  ? "bg-blue-100 text-blue-600 px-2 py-1 rounded flex items-center transition-all duration-200"
                  : "text-gray-700 hover:text-blue-500 px-2 py-1 flex items-center transition-all duration-200"
              }
            >
              Cart
              {cartList.length > 0 && (
                <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full -top-2 -right-3">
                  {cartList.length}
                </div>
              )}
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};
