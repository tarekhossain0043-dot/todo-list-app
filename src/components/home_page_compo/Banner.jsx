import { Link } from "react-router-dom";
import { assets, shopCategory } from "../../assets/assets_admin/assets";
const Banner = () => {
  return (
    <div className="bg-slate-50 pb-5 mt-1 shadow-sm">
      <div className="container m-auto">
        <div>
          {/* Banner */}
          <div className="flex max-[750px]:flex-col gap-1">
            <div className="banner-left">
              {/* banner shop category */}
              <div className="shop-category transition-all duration-500 ease-in-out">
                <div className="w-[215px] bg-slate-100 shadow-sm overflow-y-scroll scroll-smooth max-h-[300px] p-4 rounded-sm">
                  <ul className="flex flex-col gap-3">
                    {shopCategory.map((shopCategoryItem) => {
                      return (
                        <li
                          key={shopCategoryItem.id}
                          className="flex items-center cursor-pointer w-full gap-2 transition-all duration-300 ease-in-out px-5 py-3 bg-slate-100 shadow-sm hover:bg-slate-300 rounded-sm"
                        >
                          <img
                            src={shopCategoryItem.icon}
                            className="w-4 h-4 text-slate-500"
                            alt="shop-category-icon"
                          />
                          <p className="mb-0 text-sm text-slate-600 truncate">
                            {shopCategoryItem.label}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              {/* banner shop category */}
            </div>
            <div className="banner-right flex-1">
              <div className="w-full bg-gradient-to-r overflow-hidden relative from-indigo-50 to-indigo-100 h-full">
                <div className="px-10 py-12">
                  {/* left content */}
                  <div className="flex flex-col">
                    <p className="mb-2">
                      <span className="text-sm capitalize text-slate-400 font-medium">
                        <Link to="/shop">
                          Tanvir{" "}
                          <span className="text-slate-700 cursor-pointer normal-case">
                            | e-shop
                          </span>
                        </Link>
                      </span>
                    </p>
                    <h2 className="mb-1 text-slate-800 font-bold uppercase text-[25px] leading-[40px]">
                      welcome to e-shop
                    </h2>
                    <h4 className="mb-2.5 text-slate-600 font-medium uppercase text-[17px] leading-[26px]">
                      Millions of products
                    </h4>
                    <button className="px-8 py-3 bg-slate-100 shadow-sm rounded-sm cursor-pointer transition-all duration-500 ease-in-out hover:bg-slate-200 capitalize font-medium inline-block w-40 truncate">
                      <Link to="/shop">shop now</Link>
                    </button>
                  </div>
                  {/* left content */}
                </div>
                <div className="banner-img">
                  <div className="absolute max-[991px]:static bottom-0 right-10">
                    <div className="w-[600px] max-[980px]:hidden max-[1200px]:w-[400px] max-[1099px]:w-[300px] max-h-[280px]">
                      <img
                        src={assets.upload_area}
                        className="w-full"
                        alt="banner-image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Banner */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
