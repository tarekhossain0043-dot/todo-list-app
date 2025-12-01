import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets_admin/assets";
const CheckOut = ({ serOderData }) => {
  const [billingInforShow, setBillingInforShow] = useState(false);
  const [shippingInfoShow, setShippingInfoShow] = useState(false);
  const [paymentInfo, setPaymentInfo] = useState(false);
  const [paymentSys, setPaymentSys] = useState("cod");

  const cart = useSelector((state) => state.cart);

  const [billingInfoData, setBillingInfoData] = useState({
    fullName: "",
    email: "",
    phone: "",
    // shiping info
    address: "",
    zip: "",
    city: "",
    // card info
    cardNum: "",
    cardHolder: "",
    expireDate: "",
    cashOndelivary: "",
    cvv: "",
  });
  console.log(billingInfoData);

  const navigate = useNavigate();

  const handleOrderPlace = () => {
    const newOrder = {
      productData: cart.product,
      orderInfoData: billingInfoData,
      totalPrice: cart.totalPrice,
    };
    serOderData(newOrder);
    navigate("/order-confirmation");
  };

  return (
    <div className="bg-slate-100 py-12">
      <div className="container">
        <h4 className="text-xl text-slate-700 capitalize text-left mb-5">
          checkout
        </h4>
        <div className="grid grid-cols-1 lg:grid-cols-[8fr_4fr] gap-8">
          <div className="flex flex-col gap-6">
            {/* left area */}
            {/* billing info */}
            <div className="border border-slate-200 rounded-xl p-3">
              <div
                onClick={() => setBillingInforShow((prev) => !prev)}
                className="flex cursor-pointer transition-all duration-300 ease-in-out items-center justify-between text-slate-600 font-bold transition-all duration-300 ease-in-out"
              >
                <h4 className="mb-0 text-xl font-medium capitalize">
                  billing information
                  <span className="text-red-400 pl-1">*</span>
                </h4>
                <img
                  src={assets.dropdown}
                  alt="dropdown-img"
                  className={`w-3 h-3 ${
                    billingInforShow ? "transform rotate-180" : "rotate-0"
                  } cursor-pointer leading-none`}
                />
              </div>
              <div
                className={`${
                  billingInforShow
                    ? "visible opacity-100 block translate-y-0"
                    : "opacity-0 hidden invisible translate-y-7"
                }transition-all mt-5 duration-300 transform ease-in-out billing_submenu`}
              >
                <form>
                  <div className="relative mb-3">
                    <label
                      htmlFor="fullName"
                      className="text-slate-600 capitalize cursor-pointer text-[16px] block mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full border border-slate-200 shadow-sm text-slate-600 capitalize cursor-pointer transition-all duration-300 ease-in-out outline-none focus:ring-1 ring-blue-500 p-4 text-sm text-slate-600 pr-6"
                      name="fullName"
                      onChange={(e) =>
                        setBillingInfoData({
                          ...billingInfoData,
                          fullName: e.target.value,
                        })
                      }
                      id="fullName"
                      placeholder="Enter fullname"
                    />
                  </div>
                  <div className="relative mb-3">
                    <label
                      htmlFor="email"
                      className="text-slate-600 capitalize cursor-pointer  text-[16px] block mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      className="w-full border text-sm border-slate-200 shadow-sm text-slate-600 capitalize cursor-pointer transition-all duration-300 ease-in-out outline-none focus:ring-1 ring-blue-500 p-4 text-slate-600 pr-6"
                      name="email"
                      onChange={(e) =>
                        setBillingInfoData({
                          ...billingInfoData,
                          email: e.target.value,
                        })
                      }
                      id="email"
                      placeholder="Enter Email"
                    />
                  </div>
                  <div className="relative mb-0">
                    <label
                      htmlFor="phone"
                      className="text-slate-600 capitalize cursor-pointer  text-[16px] block mb-2"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full border text-sm border-slate-200 shadow-sm text-slate-600 capitalize cursor-pointer transition-all duration-300 ease-in-out outline-none focus:ring-1 ring-blue-500 p-4 text-slate-600 pr-6"
                      name="phone"
                      onChange={(e) =>
                        setBillingInfoData({
                          ...billingInfoData,
                          phone: e.target.value,
                        })
                      }
                      id="phone"
                      maxLength={11}
                      placeholder="Enter Phone"
                    />
                  </div>
                </form>
              </div>
            </div>
            {/* billing info */}
            {/* shipping  info */}
            <div className="border border-slate-200 rounded-xl p-3">
              <div
                onClick={() => setShippingInfoShow((prev) => !prev)}
                className="flex cursor-pointer transition-all duration-300 ease-in-out items-center justify-between text-slate-600 font-bold transition-all duration-300 ease-in-out"
              >
                <h4 className="mb-0 text-xl font-medium capitalize">
                  shipping information
                  <span className="text-red-400 pl-1">*</span>
                </h4>
                <img
                  src={assets.dropdown}
                  alt="dropdown-img"
                  className={`w-3 h-3 ${
                    shippingInfoShow ? "transform rotate-180" : "rotate-0"
                  } cursor-pointer leading-none`}
                />
              </div>
              <div
                className={`${
                  shippingInfoShow
                    ? "visible opacity-100 block translate-y-0"
                    : "opacity-0 hidden invisible translate-y-7"
                }transition-all mt-5 duration-300 transform ease-in-out billing_submenu`}
              >
                <form>
                  <div className="relative mb-3">
                    <label
                      htmlFor="address"
                      className="text-slate-600 capitalize cursor-pointer text-[16px] block mb-2"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      className="w-full border border-slate-200 shadow-sm text-slate-600 capitalize cursor-pointer transition-all duration-300 ease-in-out outline-none focus:ring-1 ring-blue-500 p-4 text-sm text-slate-600 pr-6"
                      name="address"
                      onChange={(e) =>
                        setBillingInfoData({
                          ...billingInfoData,
                          address: e.target.value,
                        })
                      }
                      id="address"
                      placeholder="Enter nick address"
                    />
                  </div>
                  <div className="relative mb-3">
                    <label
                      htmlFor="zip"
                      className="text-slate-600 capitalize cursor-pointer  text-[16px] block mb-2"
                    >
                      Zip Code
                    </label>
                    <input
                      type="code"
                      className="w-full border text-sm border-slate-200 shadow-sm text-slate-600 capitalize cursor-pointer transition-all duration-300 ease-in-out outline-none focus:ring-1 ring-blue-500 p-4 text-slate-600 pr-6"
                      name="zip"
                      onChange={(e) =>
                        setBillingInfoData({
                          ...billingInfoData,
                          zip: e.target.value,
                        })
                      }
                      id="zip"
                      placeholder="Enter Zip Code"
                    />
                  </div>
                  <div className="relative mb-0">
                    <label
                      htmlFor="city"
                      className="text-slate-600 capitalize cursor-pointer  text-[16px] block mb-2"
                    >
                      city
                    </label>
                    <input
                      type="text"
                      className="w-full border text-sm border-slate-200 shadow-sm text-slate-600 capitalize cursor-pointer transition-all duration-300 ease-in-out outline-none focus:ring-1 ring-blue-500 p-4 text-slate-600 pr-6"
                      name="city"
                      onChange={(e) =>
                        setBillingInfoData({
                          ...billingInfoData,
                          city: e.target.value,
                        })
                      }
                      id="city"
                      placeholder="Enter your city"
                    />
                  </div>
                </form>
              </div>
            </div>
            {/* shipping  info */}
            {/* payment method */}
            <div className="border border-slate-200 rounded-xl p-3">
              <div
                onClick={() => setPaymentInfo((prev) => !prev)}
                className="flex cursor-pointer transition-all duration-300 ease-in-out items-center justify-between text-slate-600 font-bold transition-all duration-300 ease-in-out"
              >
                <h4 className="mb-0 text-xl font-medium capitalize">
                  payment method
                  <span className="text-red-400 pl-1">*</span>
                </h4>
                <img
                  src={assets.dropdown}
                  alt="dropdown-img"
                  className={`w-3 h-3 ${
                    paymentInfo ? "transform rotate-180" : "rotate-0"
                  } cursor-pointer leading-none`}
                />
              </div>
              <div
                className={`${
                  paymentInfo
                    ? "visible opacity-100 block translate-y-0"
                    : "opacity-0 hidden invisible translate-y-7"
                }transition-all mt-5 duration-300 transform ease-in-out billing_submenu`}
              >
                <form>
                  <div className="relative flex items-center gap-3 mb-3">
                    <input
                      type="radio"
                      className="text-sm border-slate-200 shadow-sm text-slate-600 capitalize cursor-pointer transition-all duration-300 ease-in-out outline-none"
                      name="payment"
                      checked={paymentSys === "cod"}
                      onChange={() => setPaymentSys("cod")}
                      id="cod"
                    />
                    <label
                      htmlFor="cod"
                      className="text-slate-600 capitalize cursor-pointer text-[16px]"
                    >
                      cash on delivery
                    </label>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <input
                      type="radio"
                      checked={paymentSys === "dc"}
                      onChange={() => setPaymentSys("dc")}
                      className="text-sm border-slate-200 shadow-sm text-slate-600 capitalize cursor-pointer transition-all duration-300 ease-in-out outline-none"
                      name="payment"
                      id="dc"
                    />
                    <label
                      htmlFor="dc"
                      className="text-slate-600 capitalize cursor-pointer  text-[16px]"
                    >
                      Debit card
                    </label>
                  </div>
                </form>
              </div>
              {/* payment action */}
              {paymentSys === "dc" && (
                <div className="border bg-slate-200 bg-opacity-20 border-slate-200 rounded-xl p-3 py-5">
                  <h4 className="mb-5 text-xl font-medium capitalize">
                    Debit card information
                  </h4>
                  <form>
                    <div className="relative mb-3">
                      <label
                        htmlFor="cardNum"
                        className="text-slate-600 capitalize cursor-pointer text-[16px] block mb-2"
                      >
                        card number
                      </label>
                      <input
                        type="number"
                        className="w-full border border-slate-200 shadow-sm text-slate-600 capitalize cursor-pointer transition-all duration-300 ease-in-out outline-none focus:ring-1 ring-blue-500 p-4 text-sm text-slate-600 pr-6"
                        name="cardNum"
                        onChange={(e) =>
                          setBillingInfoData({
                            ...billingInfoData,
                            cardNum: e.target.value,
                          })
                        }
                        id="cardNum"
                        placeholder="Enter your debit card number"
                      />
                    </div>
                    <div className="relative mb-3">
                      <label
                        htmlFor="cardHolder"
                        className="text-slate-600 capitalize cursor-pointer  text-[16px] block mb-2"
                      >
                        card holder name
                      </label>
                      <input
                        type="text"
                        className="w-full border text-sm border-slate-200 shadow-sm text-slate-600 capitalize cursor-pointer transition-all duration-300 ease-in-out outline-none focus:ring-1 ring-blue-500 p-4 text-slate-600 pr-6"
                        name="cardHolder"
                        id="cardHolder"
                        onChange={(e) =>
                          setBillingInfoData({
                            ...billingInfoData,
                            cardHolder: e.target.value,
                          })
                        }
                        placeholder="Enter card holder name"
                      />
                    </div>
                    <div className="flex items-center gap-4 mb-0">
                      <div className="w-full">
                        <label
                          htmlFor="expireDate"
                          className="text-slate-600 capitalize cursor-pointer  text-[16px] block mb-2"
                        >
                          Exprire date
                        </label>
                        <input
                          type="date"
                          className="w-full border text-sm border-slate-200 shadow-sm text-slate-600 uppercase cursor-pointer transition-all duration-300 ease-in-out outline-none focus:ring-1 ring-blue-500 p-4 text-slate-600 pr-6"
                          name="expireDate"
                          onChange={(e) =>
                            setBillingInfoData({
                              ...billingInfoData,
                              expireDate: e.target.value,
                            })
                          }
                          id="expireDate"
                          placeholder="MM/YY"
                        />
                      </div>
                      <div className="w-full">
                        <label
                          htmlFor="cvv"
                          className="text-slate-600 capitalize cursor-pointer  text-[16px] block mb-2"
                        >
                          CVV
                        </label>
                        <input
                          type="date"
                          className="w-full border text-sm border-slate-200 shadow-sm text-slate-600 uppercase cursor-pointer transition-all duration-300 ease-in-out outline-none focus:ring-1 ring-blue-500 p-4 text-slate-600 pr-6"
                          name="cvv"
                          onChange={(e) =>
                            setBillingInfoData({
                              ...billingInfoData,
                              cvv: e.target.value,
                            })
                          }
                          id="cvv"
                          placeholder="CVV"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              )}

              {/* payment action */}
            </div>
            {/* payment method */}
            {/* left area */}
          </div>
          <div className="right-area">
            {/* right area */}
            {/* {cart.product.length > (
              ) : (
                    <p className="text-slate-400 text-center normal-case mb-0">
                      Card have no product yeat..
                    </p>
                  )} */}

            <div className="px-7 py-5 bg-slate-100 shadow-sm min-h-[300px] h-full rounded-xl">
              <div>
                <h4 className="text-slate-700 capitalize text-xl font-medium mb-5">
                  order summary
                </h4>
                {cart.product.map((product) => (
                  <div>
                    <ul className="flex flex-col gap-2">
                      <li className="border-b last-of-type:border-b-0 border-b-slate-200 mb-2 pb-2 flex items-start justify-between">
                        <div className="flex items-center gap-2">
                          <img
                            src={product.img}
                            alt={product.desc}
                            className="w-20 h-20"
                          />
                          <p className="text-slate-600 mb-0 text-sm capitalize">
                            {product.title}
                            <span className="block pr-2">
                              ${product.price} x{" "}
                              <span className="pl-2">{product.quantity}</span>
                            </span>
                          </p>
                        </div>
                        <p className="text-slate-600 mb-0 text-sm">
                          $ {product.price}
                        </p>
                      </li>
                    </ul>
                  </div>
                ))}
                <div className="flex items-center justify-between my-6">
                  <span className="text-slate-600 capitalize text-sm">
                    total price :
                  </span>
                  <span className="text-slate-800 text-sm">
                    $ {cart.totalPrice.toFixed(0)}
                  </span>
                </div>
                <button
                  onClick={handleOrderPlace}
                  className="py-3 bg-red-500 transition-all duration-300 hover:bg-red-600 text-center capitalize font-medium block w-full border-0 cursor-pointer"
                >
                  place order
                </button>
              </div>

              {/* right area */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
