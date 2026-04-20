import React from "react";

const LoadingCard = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden h-full relative">

      {/* image */}
      <div className="w-full h-48 bg-gray-300 dark:bg-gray-700"></div>

      {/* brand */}
      <span className="absolute top-3 right-3 bg-gray-300 h-5 w-12 rounded-xl"></span>

      <div className="p-4 space-y-2">

        {/* name */}
        <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>

        {/* category */}
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>

        {/* price section */}
        <div className="flex justify-between items-center">

          <div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-20 mb-1"></div>
            <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-16"></div>
          </div>

          {/* cart button */}
          <div className="h-8 w-8 bg-gray-300 dark:bg-gray-700 rounded-full"></div>

        </div>

      </div>
    </div>
  );
};


const ProductsLoading = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />

    </div>
  );
};

export default ProductsLoading;