import { Link, useNavigate } from "react-router-dom";

const OrderConfirmation = ({ orderData }) => {
  console.log(orderData);
  const product = orderData.productData;
  const navigate = useNavigate();
  return (
    <div className="bg-slate-100 py-20">
      <div className="container max-w-3xl w-full m-auto flex items-center justify-center">
        <div className="flex flex-col px-5 lg:flex-row items-center justify-between gap-10">
          <div>
            <h2 className="text-slate-600 capitalize mb-5">
              Thanks for your order!
            </h2>
            <p className="text-sm text-slate-400 normal-case mb-3 leading-9">
              Your order has been placed successfully and you will received an
              email after some time!{" "}
            </p>
            <div className="mt-5">
              <h3 className="text-slate-700 capitalize font-bold">
                Order summary
              </h3>
              <span className="text-slate-400 text-sm">
                order number : {orderData.totleQuantity}
              </span>{" "}
              <br />
              <span className="text-slate-400 text-sm">
                order from : {orderData.orderInfoData.fullName} <br />
                email : {orderData.orderInfoData.email} <br />
                phone : {orderData.orderInfoData.phone} <br />
              </span>
              <hr className="border-b border-b-slate-200" />
              <span className="text-slate-400 text-sm">
                address : {orderData.orderInfoData.address} <br />
                zip : {orderData.orderInfoData.zip} <br />
                city : {orderData.orderInfoData.city} <br />
              </span>
              <hr className="border-b border-b-slate-200" />
              <span className="text-slate-400 text-sm">
                Card Holder : {orderData.orderInfoData.cardHolder} <br />
                Card Number : {orderData.orderInfoData.cardNum} <br />
                Ex: : {orderData.orderInfoData.expireDate} <br />
                cvv : {orderData.orderInfoData.cvv} <br />
              </span>
            </div>
            <div className="mt-4">
              <div className="flex items-center gap-4">
                <Link
                  to="/successOrder"
                  className="shadow-sm hover:bg-slate-200 cursor-pointer transition-all duration-300 ease-in-out px-8 py-4 bg-green-400"
                >
                  Track Order
                </Link>
                <Link
                  to="/shop"
                  className="bg-slate-100 shadow-sm hover:bg-slate-200 cursor-pointer transition-all duration-300 ease-in-out px-8 py-4"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-slate-500 capitalize mb-4">
              Product Information
            </h4>
            <div className="px-7 py-5 bg-slate-100 shadow-md min-h-[200px] h-full rounded-xl">
              <div>
                <h4 className="text-slate-700 capitalize text-xl font-medium mb-5">
                  order summary
                </h4>
                <div>
                  <ul className="flex flex-col gap-2">
                    {product.map((pro) => (
                      <li className="border-b last-of-type:border-b-0 border-b-slate-200 mb-2 pb-2 flex items-start justify-between">
                        <div className="flex items-center justify-between">
                          <img
                            src={pro.img}
                            alt={pro.desc}
                            className="w-20 h-20"
                          />
                          <p className="text-slate-600 mb-0 text-end text-sm capitalize">
                            {pro.title}
                            <span className="block pr-2">
                              ${pro.price} x{" "}
                              <span className="pl-2">{pro.quantity}</span>
                            </span>
                          </p>
                        </div>
                        {/* <p className="text-slate-600 mb-0 text-sm">
                          $ {pro.price}
                        </p> */}
                      </li>
                    ))}
                  </ul>
                </div>
                <hr className="border-b border-b-slate-200" />
                <div className="flex items-center justify-between my-3">
                  <span className="text-slate-600 capitalize text-sm">
                    total price :
                  </span>
                  <span className="text-slate-800 text-sm">
                    $ {orderData.totalPrice.toFixed(0)}
                  </span>
                </div>
              </div>

              {/* right area */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
