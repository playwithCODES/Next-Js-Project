import { FaGift } from "react-icons/fa";
import Image from "next/image";
import banner2 from "@/assets/images/banner2.jpg";

const ProductsBanner = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-6">

        <div className="relative overflow-hidden rounded-2xl h-[220px] shadow-sm">

          {/* Background Image */}
          <Image
            src={banner2}
            alt="banner"
            fill
            priority
            className="object-cover"
          />

          {/* Overlay (controlled, no ugly fade) */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80"></div>

          {/* Content */}
          <div className="relative z-10 flex justify-between items-center h-full px-10 text-white">

            {/* Left */}
            <div>
              <h1 className="text-xl md:text-2xl">
                NEW YEAR 2083 OFFER
              </h1>

              <h2 className="text-3xl md:text-5xl font-semibold my-2 md:my-3">
                20% OFF ON EVERY PRODUCT
              </h2>

              <button className="bg-white text-black px-5 py-1 rounded-lg font-semibold hover:bg-gray-200 transition">
                Buy Now
              </button>
            </div>

            {/* Right Icon */}
            <div className="text-5xl md:text-7xl hidden sm:block">
              <FaGift />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductsBanner;