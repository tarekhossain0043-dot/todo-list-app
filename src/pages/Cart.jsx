import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets_admin/assets";
import ChangeAddressModal from "../components/ChangeAddressModal";
import Modal1 from "../modal/Modal1";

import {
  decrease,
  increase,
  removeFromCard,
} from "../redux/features/carts/CartSlice";

const Cart = () => {
  const product = useSelector((state) => state.cart.product);
  const cart = useSelector((state) => state.cart);
  const [shippingAdd, setShippingAdd] = useState(
    "123 default St. Default city,Dc"
  );

  const handleOnProcced = () => {
    navigate("/checkout");
    product;
  };

  // navigate
  const navigate = useNavigate();

  const [showMoreProdcut, setShowMoreProduct] = useState(false);

  const showProduct = !showMoreProdcut ? product.slice(0, 5) : product;

  // const [showAllProduct, setShowAllProduct] = useState(false);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      {showProduct.length > 0 ? (
        <div className="bg-slate-200 py-12 shadow-sm rounded-sm">
          <div className="container">
            <h3 className="mb-4 text-2xl text-slate-700 uppercase">
              shopping cart
            </h3>
            <div className="grid max-[1200px]:grid-cols-[7fr_5fr] max-[992px]:grid-cols-1 grid-cols-[8fr_4fr] gap-10">
              <div className="flex items-center justify-between max-[992px]:overflow-x-scroll">
                <div className="flex flex-col flex-1 justify-between">
                  <div className="flex items-center justify-between flex-1">
                    <h4 className="text-slate-800 text-[16px] uppercase leading-[30px]">
                      product
                    </h4>
                    <ul className="flex items-center justify-between">
                      <li className="text-slate-800 mr-14 text-[16px] uppercase leading-[30px]">
                        price
                      </li>
                      <li className="text-slate-800 mr-14 text-[16px] uppercase leading-[30px]">
                        quantity
                      </li>
                      <li className="text-slate-800 mr-14 text-[16px] uppercase leading-[30px]">
                        subtotal
                      </li>
                      <li className="text-slate-800 text-[16px] uppercase leading-[30px]">
                        action
                      </li>
                    </ul>
                  </div>
                  <hr className="border border-b-slate-100 my-1" />
                  {showProduct.map((product) => {
                    return (
                      <div
                        key={product.id}
                        className="flex border-b transition-all duration-500 ease-in-out last-of-type:border-none border-slate-100 items-center justify-between"
                      >
                        <div>
                          <div className="flex items-center gap-3">
                            <div className="w-[50px] h-[50px]">
                              <img
                                src={product.img}
                                className="w-full"
                                alt="product-img"
                              />
                            </div>
                            <p className="text-xs">{product.title}</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between gap-20">
                          <div>
                            <span>{product.price}</span>
                          </div>
                          <div className="flex border border-slate-100 items-center gap-2">
                            <button
                              onClick={() => dispatch(decrease(product.id))}
                              className="px-2 border-r border-slate-100"
                            >
                              -
                            </button>
                            <p className="px-2 border-r border-slate-100">
                              {product.quantity}
                            </p>
                            <button
                              onClick={() => dispatch(increase(product.id))}
                              className="px-2"
                            >
                              +
                            </button>
                          </div>
                          <div>
                            <span>
                              {product.quantity * product.price.toFixed(0)}
                            </span>
                          </div>
                          <button
                            onClick={() => dispatch(removeFromCard(product.id))}
                            className="text-red-400 cursor-pointer transition-all duration-300 ease-in-out hover:text-slate-600"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    );
                  })}
                  {product.length > 5 ? (
                    <button
                      onClick={() => setShowMoreProduct((prev) => !prev)}
                      className="text-slate-500 px-8 py-3 bg-slate-200 shadow-sm capitalize cursor-pointer transition-all duration-300 ease-in-out"
                    >
                      {showMoreProdcut ? "show less" : "Show all product"}
                    </button>
                  ) : null}
                </div>
              </div>
              <div className="bg-slate-50 max-h-[400px] flex flex-col items-start w-full justify-center shadow-sm rounded-sm border-slate-200 border px-8 py-5">
                <h4 className="text-2xl border-b border-b-slate-200 text-slate-700 pb-2 mb-3 capitalize">
                  cart totals
                </h4>
                <div className="flex items-center border-b border-slate-200 pb-2 mb-4 justify-between">
                  <span className="text-lg text-slate-400 capitalize">
                    total items :{" "}
                  </span>
                  <span className="text-xl pl-3 text-slate-400 capitalize">
                    {cart.totleQuantity}
                  </span>
                </div>
                <div className="border-b pb-3 border-slate-200">
                  <span className="text-lg text-slate-400 capitalize">
                    Shipping :
                  </span>
                  <p className="text-xs pl-2 text-slate-400">
                    addess to :{" "}
                    <span className="text-slate-600 font-medium capitalize">
                      {shippingAdd}
                    </span>
                  </p>
                  <Link
                    onClick={() => setIsModalOpen((prev) => !prev)}
                    className="text-transparent pl-2 bg-clip-text bg-gradient-to-tr from-indigo-300 to-indigo-400 py-2 cursor-pointer transition-all duration-300 ease-in-out hover:text-slate-700"
                  >
                    Change address
                  </Link>
                </div>
                <div className="py-4 mb-2 flex items-center justify-between">
                  <span className="capitalize text-slate-400 text-lg">
                    Total price :
                  </span>
                  <span className="text-slate-400 text-lg">
                    $ {cart.totalPrice.toFixed(0)}
                  </span>
                </div>
                <button
                  onClick={handleOnProcced()}
                  className="px-8 w-full py-4 bg-red-700 hover:bg-red-800 cursor-pointer transition-all duration-500 ease-in-out text-white text-sm capitalize shadow-sm"
                >
                  proceed to checkout
                </button>
              </div>
            </div>
          </div>
          <Modal1 isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
            <ChangeAddressModal
              setIsModalOpen={setIsModalOpen}
              setShippingAdd={setShippingAdd}
              shippingAdd={shippingAdd}
            />
          </Modal1>
        </div>
      ) : (
        <div className="cart-empty py-[100px] bg-slate-100">
          <div className="flex flex-col gap-5 max-w-sm px-8 py-6 bg-slate-100 m-auto items-center justify-center">
            <img
              src={assets.cancel_icon}
              className="w-20 h-20"
              alt="haven't any product"
            />
            <p className="text-3xl text-center truncate leading-[40px] text-slate-700 cursor-pointer">
              owps... <br />
              There Hav'nt any products!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
