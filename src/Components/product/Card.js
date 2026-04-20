import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaShoppingCart } from "react-icons/fa";
import { PRODUCTS_ROUTE } from "@/Constants/routes";
import Link from "next/link";

const ProductCard = ({_id,  name, price, brand, category, imageUrls }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 h-full ">
      
      <Link href={`${PRODUCTS_ROUTE}/${_id}`} className="relative">
      <Image
       src={imageUrls[0]}
          alt={name}
          className="w-full h-48 object-cover"
          height={400}
          width={600}
      />
       <span className=" absolute top-3 right-3 bg-teal-700 text-white text-xs font-medium rounded-xl px-2 py-1">
          {brand}
        </span>
      </Link>

      <div className="p-4 space-y-2">
        <Link href={`${PRODUCTS_ROUTE}/${_id}`}  className="font-semibold text-lg text-gray-800 dark:text-gray-100 mb-1 hover:text-primary hover:underline">
          {name}
        </Link>

        <div className="flex mb-2 items-center">
          <div className="flex text-yellow-500 ">{category}</div>

          <span className="text-lg font-semibold text-gray-500 dark:"></span>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <span className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              Rs. {price}
            </span>

            <span className="text-sm text-gray-500 line-through ml-1">
              Rs. {price * 1.05}
            </span>
          </div>

          <button className="bg-primary text-white hover:bg-secondary px-2 py-1.5 rounded-full ">
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
