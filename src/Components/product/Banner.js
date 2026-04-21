import { FaGift } from "react-icons/fa";
import Image from "next/image";
import banner from "@/assets/images/banner.jpg"
import banner2 from "@/assets/images/banner2.jpg"

const ProductsBanner = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden text-white flex flex-row py-7 items-start px-10 justify-between bg-linear-to-r from-primary/40 to-secondary/40 w-full h-50 rounded-2xl shadow-sm">

        {/* <div className="relative overflow-hidden text-white flex flex-row py-7 items-start px-10 justify-between bg-linear-to-r from-blue-500 to-purple-500 w-full h-50 rounded-2xl shadow-sm"> */}

           <Image src={banner2}
           alt="banner2"
           height={999}
           width={999}
           className="w-full absolute bottom-0 left-0 -z-10"
           loading="eager"
           />


          <div>
            <h1 className="text-2xl">NEW YEAR 2083 OFFER</h1>
            <h2 className="text-5xl font-semibold my-3">
              20% OFF ON EVERY PRODUCT
            </h2>
            <button className="text-black bg-white rounded-lg px-5 font-semibold py-1 ">
              Buy Now
            </button>
          </div>
          <div className="px-10 text-7xl">
          <FaGift />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductsBanner;
