const ChangeAddressModal = ({
  setIsModalOpen,
  setShippingAdd,
  shippingAdd,
}) => {
  const onClose = () => {
    setShippingAdd(shippingAdd);
    setIsModalOpen((prev) => (prev = false));
  };
  return (
    <div>
      <input
        type="text"
        value={shippingAdd}
        onChange={(e) => setShippingAdd(e.target.value)}
        className="w-full px-5 py-3 capitalize rounded-sm outline-none focus:ring-1 focus:ring-blue-500 border bg-transparent border-slate-200 mb-4"
      />
      <div className="flex items-center gap-3 justify-end">
        <button
          onClick={() => setIsModalOpen((prev) => (prev = false))}
          className="text-white bg-gray-500 hover:bg-gray-600 transition-all duration-300 ease-in-out rounded-sm px-4 py-2"
        >
          cancel
        </button>
        <button
          onClick={() => onClose()}
          className="text-white bg-blue-500 hover:bg-blue-600 transition-all duration-300 ease-in-out rounded-sm px-4 py-2"
        >
          save & change
        </button>
      </div>
    </div>
  );
};

export default ChangeAddressModal;
