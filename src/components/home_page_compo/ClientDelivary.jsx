import {
  delivary_features,
  special_Offer,
} from "../../assets/assets_admin/assets";
const ClientDelivary = () => {
  return (
    <div className="pt-4">
      <div className="container mx-auto">
        <div>
          {/* client delvary desc */}
          <div className="grid grid-cols-repeat gap-5">
            {delivary_features.map((delivaryFeat) => {
              return (
                <div
                  key={delivaryFeat.id}
                  className="hover:bg-slate-200 min-h-[100px] text-center cursor-pointer bg-slate-100 shadow-sm rounded-sm p-4 flex flex-col items-center justify-center"
                >
                  <img
                    src={delivaryFeat.icon}
                    className="w-10 h-10"
                    alt="delivary-logo"
                  />
                  <h4 className="mb-0 text-[18px] font-medium mb-1 mt-1 text-slate-800 capitalize">
                    {delivaryFeat.title}
                  </h4>
                  <p className="text-xs mb-0 font-medium text-slate-500 leading-tight">
                    {delivaryFeat.desc}
                  </p>
                </div>
              );
            })}
          </div>
          {/* client delvary desc */}
        </div>
        <div className="pt-5">
          {/* specital offer */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
            {special_Offer.map((specialOff) => {
              const { id, title, type, img } = specialOff;
              return (
                <div
                  key={id}
                  className={`${type} p-10 relative overflow-hidden rounded-sm border-slate-50 shadow-sm transition-all duration-300 ease-in-out hover:-pt-2 hover:-pb-2 min-h-[200px] h-full flex flex-col items-start justify-start`}
                >
                  <div>
                    <h3 className="text-slate-900 font-bold leading-tight capitalize mb-1">
                      {title}
                    </h3>
                    <button className="text-slate-400 text-sm cursor-pointer transition-all duration-300 ease-in-out hover:bg-slate-700 hover:text-white/70 hover:px-5 py-2">
                      View All
                    </button>
                  </div>
                  <div className="absolute -bottom-5 right-10">
                    <img
                      src={img}
                      className="w-full h-[200px] shadow-sm"
                      alt="offer_Absolute-img"
                    />
                  </div>
                </div>
              );
            })}
          </div>
          {/* specital offer */}
        </div>
      </div>
    </div>
  );
};

export default ClientDelivary;
