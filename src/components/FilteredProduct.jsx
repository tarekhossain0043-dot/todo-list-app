import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/features/carts/CartSlice";
const FilteredProduct = () => {
  const ProductFiltering = useSelector((state) => state.product.filterData);
  const dispatch = useDispatch();
  const handleProduct = (e, product) => {
    e.preventDefault();
    dispatch(addToCart(product));
    alert("product added successfully!");
  };
  return (
    <div className="bg-slate-100">
      <div className="container">
        {ProductFiltering.length <= 0 ? (
          <div className="flex min-h-[40vh] items-center justify-center">
            <p className="text-center">Product not found!</p>
          </div>
        ) : (
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
            {ProductFiltering.map((product) => {
              return (
                <div
                  key={product.id}
                  className="px-4 py-5 rounded-sm border-slate-200 border cursor-pointer transition-all duration-300 ease-in-out hover:shadow-sm"
                >
                  <div className="w-full group relative flex items-center justify-center mb-3">
                    <img
                      src={product.img}
                      className="max-h-[300px] h-full"
                      alt={product.title}
                    />
                    <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <span className="text-4xl opacity-0 invisible group-hover:opacity-15 group-hover:scale-[1] transition-all duration-500 ease-out transform scale-[0] group-hover:visible text-center font-black">
                        {product.desc}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col relative gap-2">
                    <h4 className="text-lg font-bold text-slate-700 mb-0 capitalize cursor-pointer transition-all duration-300 ease-in-out">
                      {product.title}
                    </h4>
                    <span className="text-sm text-slate-400 font-semibold">
                      $ {product.price}
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="text-[20px] text-yellow-300">*</span>
                      <span className="text-[20px] text-yellow-300">*</span>
                      <span className="text-[20px] text-yellow-300">*</span>
                      <span className="text-[20px] text-yellow-300">*</span>
                      <span className="text-[20px] text-slate-300">*</span>
                    </div>
                    <div className="absolute group bottom-0 right-0">
                      <span className="text-xl text-white w-10 h-10 p-3 leading-[12px] cursor-pointer rounded-full bg-red-400 border-slate-50 flex items-center justify-center">
                        +
                      </span>
                      <button
                        onClick={(e) => handleProduct(e, product)}
                        className="absolute overflow-hidden group-hover:text-white/70 group-hover:w-40 flex items-center justify-center h-full top-0 right-0 max-w-40 w-full rounded-full invisible group-hover:visible opacity-0 group-hover:opacity-100 truncate px-6 py-2 bg-slate-400 border-none text-slate-700 capitalize cursor-pointer transition-all duration-500 ease-in-out hover:bg-slate-500 scale-x-105 capitalize"
                      >
                        add product
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilteredProduct;
