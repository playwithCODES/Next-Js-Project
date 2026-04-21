"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const DEFAULT_SORT = JSON.stringify({ createdAt: -1 });
const DEFAULT_MIN_PRICE = 0;
const DEFAULT_MAX_PRICE = 10000000000;

const ProductsFilter = () => {
  const router = useRouter();

  const [sort, setSort] = useState(DEFAULT_SORT);
  const [minPrice, setMinPrice] = useState(DEFAULT_MIN_PRICE);
  const [maxPrice, setMaxPrice] = useState(DEFAULT_MAX_PRICE);

  function filterProducts() {
    const params=new URLSearchParams();
    params.set("sort", sort);
    params.set("minPrice", minPrice);
    params.set("maxPrice", maxPrice);

    router.push(`?${params.toString()}`);
  }
  return (
    <aside className="shadow-md py-8 px-6">
      <h3 className="text-xl font-semibold text-blue-600">Filter Products</h3>

      <div className="py-3">
        <h4 className="mb-2">Sort By</h4>
        <select
          name="sort"
          id="sort"
          onChange={(e) => setSort(e.target.value)}
          className="border border-gray-300 rounded-xl w-full px-2 py-1"
        >
          <option value={JSON.stringify({ createdAt: -1 })}>
            Latest Products
          </option>
          <option value={JSON.stringify({ createdAt: 1 })}>
            Oldest Products
          </option>
          <option value={JSON.stringify({ price: 1 })}>
            Price:Low to High
          </option>
          <option value={JSON.stringify({ price: -1 })}>
            Price:High to Low
          </option>
          <option value={JSON.stringify({ name: 1 })}>Name: A-Z</option>
          <option value={JSON.stringify({ name: -1 })}>Name: Z-A</option>
        </select>
      </div>

      <div className="py-3">
        <h4 className="mb-2">Price Range</h4>

        <div className="my-5">
          <label htmlFor="minPrice">MinPrice</label>
          <input
            name="min"
            id="min"
            type="number"
            min={DEFAULT_MIN_PRICE}
            onChange={(e) => setMinPrice(Number(e.target.value))}
            className="border border-gray-300 rounded-xl w-full px-2 py-1"
          />
        </div>

        <div>
          <label htmlFor="maxPrice">MaxPrice</label>

          <input
            name="max"
            id="max"
            type="number"
            max={DEFAULT_MAX_PRICE}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="border border-gray-300 rounded-xl w-full px-2 py-1"
          />
        </div>
      </div>

      <div className="py-3">
        <button
          onClick={filterProducts}
          className="bg-primary text-white rounded-md px-1 py-1"
        >
          Filter Products
        </button>
      </div>
    </aside>
  );
};

export default ProductsFilter;
