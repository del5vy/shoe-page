import { HiOutlineShoppingBag } from "react-icons/hi";
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];

const Nav = ({ onClickShoppingBtn }) => {
  const [isMobileMenuShown, setisMobileMenuShown] = useState(false);
  return (
    <nav className="z-10 relative flex flex-wrap justify-between items-center">
      {/* Logo */}
      <a href="#">
        <NikeLogo className="h-20 w-20 dark:fill-white" />
      </a>
      {/* Burger button */}
      <button
        onClick={() => setisMobileMenuShown(!isMobileMenuShown)}
        className="dark:text-gray-400  dark:hover:bg-gray-700 lg:hidden p-2 focus:ring-2 focus:ring-gray-200 rounded-lg hover:bg-gray-200"
      >
        <RxHamburgerMenu size={25} />
      </button>

      {/* Menu list */}
      <div
        className={`${isMobileMenuShown ? "" : "hidden"} w-full lg:w-auto lg:block`}
      >
        <ul className="lg:space-x-8 flex flex-col lg:flex-row bg-gray-50 text-lg border border-gray-100 rounded-lg p-4 lg:bg-transparent lg:border-none lg:dark:text-white">
          {ROUTES.map((route, i) => {
            return (
              <li
                className={`lg:hover:text-blue-500 lg:hover:bg-transparent rounded cursor-pointer px-3 py-2 ${i === 0 ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500" : "hover:bg-gray-100"} ${(i == 3 || i == 4) && "lg:text-white"} `}
                key={route}
              >
                {route}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Cart button */}
      <div className=" btn-press-anim fixed bottom-4 left-4 lg:static lg:mr-8">
        <div
          onClick={onClickShoppingBtn}
          className="flex-center h-12 w-12 rounded-full bg-white shadow-md cursor-pointer"
        >
          <HiOutlineShoppingBag />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
