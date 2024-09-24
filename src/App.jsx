import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import NewArrivalSection from "./components/NewArrivalSection";
import ShoeDetail from "./components/ShoeDetail";
import Sidebar from "./components/Sidebar";

// import Card from "./components/Card";
import { SHOE_LIST } from "./constant";

import Cart from "./components/Cart";
import { BiMoon, BiSun } from "react-icons/bi";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentShoe, setCurrentShoe] = useState(SHOE_LIST[0]);
  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("isDarkMode");
    if (isDarkMode === "true") {
      window.document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    window.document.documentElement.classList.toggle("dark");
    if (window.document.documentElement.classList.contains("dark")) {
      localStorage.setItem("isDarkMode,", "true");
    }
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = [...cartItem];

    const existingItemIndex = cartItem.findIndex(
      (item) => item.product.id === productId
    );
    updatedCartItems.splice(existingItemIndex, 1);
    setCartItem(updatedCartItems);
  };

  const addToCart = (product, qty, size) => {
    if (qty && size) {
      const updatedCartItems = [...cartItem];
      const existingItemIndex = cartItem.findIndex(
        (item) => item.product.id === product.id
      );
      if (existingItemIndex > -1) {
        updatedCartItems[existingItemIndex].qty = qty;
        updatedCartItems[existingItemIndex].size = size;
      } else {
        updatedCartItems.push({ product: product, qty: qty, size: size });
      }
      setCartItem(updatedCartItems);
    }
  };

  return (
    <>
      <div className=" animate-fadeIn p-10 xl:px-24 dark:bg-night">
        <Nav onClickShoppingBtn={() => setIsSidebarOpen(true)} />
        <ShoeDetail shoe={currentShoe} onClickAdd={addToCart} />
        <NewArrivalSection onClickCard={setCurrentShoe} items={SHOE_LIST} />
        <Sidebar
          isOpen={isSidebarOpen}
          onClickClose={() => setIsSidebarOpen(false)}
        >
          <Cart cartItems={cartItem} onClickTrash={removeFromCart} />
        </Sidebar>
        <div className="fixed bottom-4 right-4 ">
          <button
            onClick={toggleDarkMode}
            className="bg-night-50 px-4 py-2 rounded-full text-white dark:bg-white dark:text-night"
          >
            <BiSun className="hidden dark:block" />
            <BiMoon className="dark:hidden" />
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
