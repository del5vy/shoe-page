import { CiTrash } from "react-icons/ci";
import Select from "./Select";
import { QTY, SIZE } from "../constant";

const CartItem = ({ item: { product, qty, size }, onClickTrash }) => {
  return (
    <div className=" dark:bg-transparent dark:hover:bg-night-50 cursor-pointer bg-gray-50 p-2 hover:bg-[#DAFFA2]">
      <div>
        <div className="flex  space-x-2  ">
          {/* Image */}
          <img className="h-24" src={product.src} />
          {/* Title and description */}
          <div className="space-y-2">
            <div className="font-bold dark:text-white">{product.title}</div>
            <div className="text-sm text-gray-400">{product.description}</div>
          </div>
          {/* price */}
          <div className="font-bold dark:text-white">{product.price}$</div>
        </div>

        <div className="flex justify-between gap-2 pl-32">
          {/* Inputs */}
          <div className="flex space-x-6">
            {/* QTY input */}
            <div className="mt-2 space-y-1">
              <div className="font-bold dark:text-white">QTY</div>
              <Select
                value={qty}
                title=""
                options={QTY}
                className={"w-16 p-1 pl-2"}
              />
            </div>
            {/* SIZE input */}
            <div className="mt-2 space-y-1">
              <div className="font-bold dark:text-white">SIZE</div>
              <Select
                value={size}
                title=""
                options={SIZE}
                className={"w-16 p-1 pl-2"}
              />
            </div>
          </div>
          {/* Trash icon */}
          <button
            onClick={() => onClickTrash(product.id)}
            className="flex-center mt-6"
          >
            <CiTrash size={25} className="text-black dark:text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
