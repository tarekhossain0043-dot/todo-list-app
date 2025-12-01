import { useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { assets, navMenu, shopCategory } from "../assets/assets_admin/assets";
// import { setSearchTerms } from "../redux/features/products/ProductSlice";

const Navbar = ({ productNumber, searchTerm, setSearchTerm }) => {
  const nevigate = useNavigate();
  const dispatch = useDispatch();

  //search input handler
  const handleSearchChange = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
    nevigate("/filterProduct");
  };

  // const [search, setSearch] = useState("");
  // const searchText = useSelector((state) => state.product.searchText);
  // const handleSearchTerm = (e) => {
  //   e.preventDefault();
  //   dispatch(setSearchTerms(e.target.value));
  //   nevigate("/filterProduct");
  // };
  return (
    <div className="bg-slate-50 shadow-sm pt-5">
      <div className="container m-auto">
        <div className="flex items-center justify-between space-x-2.5">
          <div className="logo">
            {/* log */}
            <Link
              to="/"
              className="text-slate-950 text-[23px] hover:bg-gradient-to-r from-blue-400 to-purple-400 hover:text-transparent hover:bg-clip-text whitespace-nowrap"
            >
              E-Shop
            </Link>
            {/* logo */}
          </div>
          <div>
            {/* product Search area */}
            <div className="search_field flex max-[768px]:hidden flex-1">
              <form
                // onSubmit={handleSearchTerm}
                className="form relative w-full lg:min-w-[700px] md:min-w-[500px] xl:min-w-[900px]"
              >
                <input
                  type="text"
                  onChange={handleSearchChange}
                  value={searchTerm}
                  placeholder="search any product.."
                  className="text-slate-300 w-full text-xs font-normal placeholder:text-slate-300 placeholder:capitalize p-3 pr-8 border-slate-200 rounded-md cursor-pointer transition-all duration-300 ease-in-out outline-none focus:ring-1 ring-blue-400"
                />
                <div className="search_img">
                  <img
                    src={assets.appointment_icon}
                    className="w-3 h-3 text-red-500 absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer"
                    alt="search-icon"
                  />
                </div>
              </form>
            </div>
            {/* product Search area */}
          </div>
          <div>
            {/* User login / register with product Cart */}
            <div className="flex items-center gap-4">
              <div className="relative cursor-pointer">
                <Link to="/cart" className="cart-icon">
                  <img
                    src={assets.earning_icon}
                    className="w-12 h-12"
                    alt="cart-icon"
                  />
                </Link>
                <span className="text-white text-sm font-medium flex items-center justify-center p-1 w-5 h-5 rounded-full bg-red-500 absolute top-1 right-0">
                  {productNumber.length > 0 ? productNumber.length : 0}
                </span>
              </div>
              {/* login/register */}
              <Link
                to="/login"
                className="text-slate-600 whitespace-nowrap cursor-pointer transition-all duration-500 ease-in-out hover:text-slate-900 capitalize"
              >
                Login / Register
              </Link>
              {/* login/register */}
            </div>
            {/* User login / register with product Cart */}
          </div>
        </div>
        <nav className="nav">
          <div className="flex items-center justify-between pb-1">
            <div>
              {/* Shop by category */}
              <div className="relative">
                <button className="group px-8 py-4 bg-slate-200 text-slate-600 rounded-sm shadow-sm cursor-pointer">
                  <div className="flex items-center hover:bg-gradient-to-r from-blue-400 to-purple-400 hover:text-transparent hover:bg-clip-text gap-3">
                    shop by category
                    <img
                      src={assets.home_icon}
                      className="w-4 h-4"
                      alt="shop-category"
                    />
                  </div>
                  <div className="shop-category group-hover:translate-y-5 group-hover:visible group-hover:opacity-[1] opacity-0 invisible transition-all duration-500 ease-in-out absolute left-0 translate-y-10">
                    <div className="w-[215px] bg-slate-100 shadow-sm overflow-y-scroll scroll-smooth max-h-[300px] relative z-50 p-4 rounded-sm">
                      {shopCategory.map((shopCategoryItem) => {
                        return (
                          <ul
                            key={shopCategoryItem.id}
                            className="flex flex-col gap-3"
                          >
                            <li className="flex items-center w-full gap-2 transition-all duration-300 ease-in-out px-5 py-3 bg-slate-200 shadow-sm hover:bg-slate-300 rounded-sm">
                              <img
                                src={shopCategoryItem.icon}
                                className="w-4 h-4"
                                alt="shop-category-icon"
                              />
                              <p className="mb-0 text-sm truncate">
                                {shopCategoryItem.label}
                              </p>
                            </li>
                          </ul>
                        );
                      })}
                    </div>
                  </div>
                </button>
              </div>
              {/* Shop by category */}
            </div>
            <div>
              <ul className="block max-[768px]:hidden">
                {navMenu.map((navItem) => {
                  return (
                    <li key={navItem.label} className="inline-block">
                      <NavLink
                        to={navItem.to}
                        className="block text-slate-500 last-of-type:pr-0 ml-5 hover:bg-gradient-to-r from-blue-400 to-purple-400 hover:text-transparent hover:bg-clip-text font-medium capitalize cursor-pointer transition-all duration-500 ease-in-out py-5 px-8"
                      >
                        {navItem.label}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
              <div className="toggle-menu hidden max-[768px]:block">
                <img src={assets.home_icon} alt="toggle-menu-icon" />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
