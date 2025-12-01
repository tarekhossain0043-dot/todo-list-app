import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-slate-200">
      <div className="container">
        <div className="grid grid-cols-[6fr_3fr_3fr] gap-5 py-10 pb-[40px]">
          <div>
            <Link
              to="/"
              className="text-slate-700 text-2xl block capitalize cursor-pointer transition-all duration-300 ease-in-out leading-10"
            >
              E-shop
            </Link>
            <p className="text-md font-medium uppercase mb-2 text-slate-700 transition-all duration-300 ease-in-out">
              our custoemr e-shop <br /> for out doctor holesale
            </p>
            <p className="text-xs text-slate-400 mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ex
              consequatur, alias neque deserunt vel cumque natus rem eveniet.
              Et?
            </p>
          </div>
          <div>
            <h4 className="capitalize text-slate-700 text-lg mb-4 cursor-pointer transition-all ease-in-out hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-tr from-blue-300 to-blue-500">
              our Features
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  to="/banner"
                  className="text-slate-400 transition-all duration-500 ease-in-out hover:text-slate-600"
                >
                  Banner
                </Link>
              </li>
              <li>
                <Link
                  to="/top-product"
                  className="text-slate-400 transition-all duration-500 ease-in-out hover:text-slate-600"
                >
                  Top product
                </Link>
              </li>
              <li>
                <Link
                  to="/product"
                  className="text-slate-400 transition-all duration-500 ease-in-out hover:text-slate-600"
                >
                  Product
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="capitalize text-slate-700 text-lg mb-4 cursor-pointer transition-all ease-in-out hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-tr from-blue-300 to-blue-500">
              our menu
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  to="/shop"
                  className="text-slate-400 transition-all duration-500 ease-in-out hover:text-slate-600"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="text-slate-400 transition-all duration-500 ease-in-out hover:text-slate-600"
                >
                  Cart
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-slate-400 transition-all duration-500 ease-in-out hover:text-slate-600"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <footer className="py-5 border-t border-slate-200 bg-slate-300">
        <div className="container flex items-center justify-between">
          <p className="mb-0 text-sm text-slate-400">
            &copy; 2025 E-shop -Ecommerce site.{" "}
            <Link className="text-blue-400">All rights reserved.</Link>
          </p>
          <ul className="flex items-center gap-8">
            <li className="text-slate-400 text-sm capitalize cursor-pointer transition-all duration-300 ease-in-out hover:text-blue-400">
              privacy polidy
            </li>
            <li className="text-slate-400 text-sm capitalize cursor-pointer transition-all duration-300 ease-in-out hover:text-blue-400">
              terms of service
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
