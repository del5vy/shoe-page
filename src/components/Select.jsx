import { IoIosArrowDown } from "react-icons/io";
import { twMerge } from "tw-merge";

const Select = ({ title, options, className, onChange, value }) => {
  return (
    <div className="relative dark:text-black">
      <select
        onChange={(e) => onChange(e.target.value)}
        value={value || ""}
        className={twMerge(
          `w-24 appearance-none border border-gray-300  p-4  ${className} `
        )}
      >
        <option value="" disabled hidden>
          {title}
        </option>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="flex-center absolute inset-y-0 right-0  pr-3 pointer-events-none">
        <IoIosArrowDown />
      </div>
    </div>
  );
};

export default Select;
