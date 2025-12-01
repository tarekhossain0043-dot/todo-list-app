import { assets } from "../assets/assets_admin/assets";
const OrderSucc = () => {
  return (
    <div className="min-h-[400px] bg-slate-50 flex items-center justify-center m-auto">
      <div className="flex items-center gap-5 bg-slate-100 shadow-sm px-6 py-12">
        <img src={assets.tick_icon} className="w-20 h-20" alt="order-confirm" />
        <h4 className="text-slate-400 capitalize">
          We get your order
          <p className="mt-2 text-sm">
            Our delivary rider man contact with you in between 3 day
          </p>
          <span className="text-xs text-slate-300">
            Thanks for your order ..{" "}
          </span>
          <p className="text-xs">we should best of luck</p>
        </h4>
      </div>
    </div>
  );
};

export default OrderSucc;
