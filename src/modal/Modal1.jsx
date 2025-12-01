const Modal1 = ({ isModalOpen, setIsModalOpen, children }) => {
  return (
    <div
      className={`bg-slate-400 ${
        isModalOpen ? "block" : "hidden"
      } bg-opacity-80 transition-all duration-300 ease-in-out fixed top-0 left-0 w-full h-screen z-40 flex items-center justify-center inset-0`}
    >
      <div className="max-w-md w-full bg-slate-50 shadow-sm p-8 rounded-xl text-center">
        <div
          onClick={() => setIsModalOpen((prev) => !prev)}
          className="absolute top-8 w-8 h-8 p-2 rounded-sm bg-slate-100 shadow-sm cursor-pointer duration-300 hover:bg-slate-200 flex items-center justify-center right-12 cursor-pointer text-lg text-slate-500 hover:text-slate-600"
        >
          &times;
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal1;
