const Sidebar = ({ children, isOpen, onClickClose }) => {
  return (
    <div>
      <div
        className={`dark:bg-night p-5 transition overflow-y-auto  transform duration-300 h-full w-full md:w-[50%] lg:w-[35%] shadow-lg top-0 fixed bg-white z-50 right-0 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          onClick={onClickClose}
          className="absolute top-4 right-4 p-2 text-black font-bold dark:text-white"
        >
          X
        </button>
        {children}
      </div>
      {isOpen && (
        <div className="fixed left-0 top-0 z-20 h-full w-full bg-black opacity-50" />
      )}
    </div>
  );
};

export default Sidebar;
