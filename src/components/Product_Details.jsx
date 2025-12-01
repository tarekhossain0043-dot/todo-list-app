import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { assets } from "../assets/assets_admin/assets";

const Product_Details = () => {
  const productId = useParams();
  const ourProduct = useSelector((state) => state.product.product);
  const [currentPro, setCurrentPro] = useState([]);
  console.log(currentPro);
  useEffect(() => {
    const newProduct = ourProduct.find((pro) => pro.id);

    setCurrentPro(newProduct);
  }, [productId]);
  const [imgSrc, setImgSrc] = useState(null);

  return (
    <div className="bg-slate-100 py-20">
      <div className="container">
        <div className="grid grid-cols-[6fr_6fr] gap-10">
          <div className="w-full bg-slate-300 shadow-sm">
            <img
              src={imgSrc === null ? assets.doc1 : imgSrc}
              className="w-full h-[250px] object-contain items-center"
              alt={currentPro.title}
            />
            <hr className="border-b my-3 border-b-slate-100" />
            <div className="grid grid-cols-3 gap-2">
              <img
                className="w-full border-r border-r-slate-100 mb-3 cursor-pointer"
                src={assets.doc1}
                onClick={(e) => setImgSrc(e.target.src)}
                alt="doc-1"
              />
              <img
                className="w-full border-r border-r-slate-100 mb-3 cursor-pointer"
                src={assets.doc2}
                onClick={(e) => setImgSrc(e.target.src)}
                alt="doc-1"
              />
              <img
                className="w-full mb-3 cursor-pointer"
                src={assets.doc3}
                onClick={(e) => setImgSrc(e.target.src)}
                alt="doc-1"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-slate-500 text-xl mb-4">{currentPro.title}</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates beatae quisquam quis autem repellendus similique natus,
              modi amet iste tenetur ut facere illum doloribus eius explicabo
              corrupti dicta totam error. Explicabo autem, inventore,
              exercitationem eligendi nihil voluptates corporis natus nostrum,
              magni doloremque soluta illum deleniti.
            </p>
            <p className="text-slate-300 text-sm">{currentPro.desc}</p>
            <span className="text-slate-400 text-sm">{currentPro.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product_Details;
