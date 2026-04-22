"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PRODUCTS_ROUTE } from "@/Constants/routes";

const DEFAULT_SORT = JSON.stringify({ createdAt: -1 });
const DEFAULT_MIN_PRICE = 0;
const DEFAULT_MAX_PRICE = 10000000000;

const ProductsFilter = () => {
  const router = useRouter();

  const [sort, setSort] = useState(DEFAULT_SORT);
  const [minPrice, setMinPrice] = useState(DEFAULT_MIN_PRICE);
  const [maxPrice, setMaxPrice] = useState(DEFAULT_MAX_PRICE);
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [brand, setBrand] = useState([]);

  function filterProducts() {
    const params = new URLSearchParams();
    params.set("sort", sort);
    params.set("minPrice", minPrice);
    params.set("maxPrice", maxPrice);
    params.set("category", category);
    params.set("name", name);
    params.set("brand", brand.join(","));

    router.push(`?${params.toString()}`);
  }

  function resetFilters() {
    setSort(DEFAULT_SORT);
    setMinPrice(DEFAULT_MIN_PRICE);
    setMaxPrice(DEFAULT_MAX_PRICE);
    setCategory("");
    setName("");
    setBrand([]);
    router.push(PRODUCTS_ROUTE);
  }

  function handleBrandsFilterChange(brand) {
    setBrand((prev) =>
      prev.includes(brand)
        ? prev.filter((item) => item !== brand)
        : [...prev, brand],
    );
  }
  return (
    <aside className="shadow-md py-2 px-5">
      <h3 className="text-xl font-semibold text-blue-600">Filter Products</h3>

      <div className="py-3">
        <h4 className="mb-1 font-semibold">Search</h4>
        <input
          name="name"
          value={name}
          id="name"
          className="border border-gray-300 rounded-md w-full px-2 py-1"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="py-2">
        <h4>Sort By</h4>
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
        <h4>Price Range</h4>

        <div>
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

      <div>
        <h4>Category</h4>
        <select
          name="category"
          id="category"
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-300 rounded-xl w-full px-2 py-1"
        >
          <option value="">Select Category</option>
          <option value="Keyboard">Keyboard</option>

          <option value="Computer">Computer</option>
          <option value="Smartphones">Smartphones</option>
          <option value="Laptops">Laptops</option>
        </select>
      </div>

      {/* <div className="py-3">
        <h4 className="mb-2">Brand</h4>
        <select
          name="brand"
          id="brand"
          onChange={(e) => setBrand(e.target.value)}
          className="border border-gray-300 rounded-xl w-full px-2 py-1"
        >
          <option value="">Select Brand</option>
          <option value="Apple">Apple</option>

          <option value="OnePlus">OnePlus</option>
          <option value="Nothing">Nothing</option>
          <option value="Samsung">Samsung</option>
          <option value="Dell">Dell</option>
        </select>
      </div> */}

      <div className="py-3">
        <h4 className="mb-2">Brands</h4>

        <div className="flex items-center justify-start gap-2 py-0.5">
          <input
            name="Apple"
            id="Apple"
            type="checkbox"
            checked={brand.includes("Apple")}
            onChange={() => handleBrandsFilterChange("Apple")}
          />
          <label htmlFor="Apple" className="text-sm text-grey-700">
            Apple
          </label>
        </div>

        <div className="flex items-center justify-start gap-2 py-0.5">
          <input
            name="Samsung"
            id="Samsung"
            type="checkbox"
            checked={brand.includes("Samsung")}

            onChange={() => handleBrandsFilterChange("Samsung")}
          />
          <label htmlFor="Samsung" className="text-sm text-gray-700">
            Samsung
          </label>
        </div>

        <div className="flex items-center justify-start gap-2 py-0.5">
          <input
            name="Dell"
            id="Dell"
            type="checkbox"
            checked={brand.includes("Dell")}
            onChange={() => handleBrandsFilterChange("Dell")}
          />
          <label htmlFor="Dell" className="text-sm text-gray-700">
            Dell
          </label>
        </div>

        <div className="flex items-center justify-start gap-2 py-0.5">
          <input
            type="checkbox"
            name="Nothing"
            id="Nothing"
            checked={brand.includes("Nothing")}
            onChange={() => handleBrandsFilterChange("Nothing")}
          />
          <label htmlFor="Nothing" className="text-sm text-gray-700">
            Nothing
          </label>
        </div>

        <div className="flex items-center justify-start gap-2 py-0.5">
          <input
            type="checkbox"
            name="Oneplus"
            id="Oneplus"
            checked={brand.includes("OnePlus")}

            onChange={() => handleBrandsFilterChange("OnePlus")}
          />

          <label htmlFor="OnePlus" className="text-sm text-gray-700">
            OnePlus
          </label>
        </div>
      </div>

      <div className="py-3">
        <button
          onClick={filterProducts}
          className="bg-primary text-white rounded-md w-full cursor-pointer
           hover:bg-blue-600
          px-5 py-1"
        >
          Filter Products
        </button>
      </div>

         <div className="py-3">
        <button
          onClick={resetFilters}
          className="bg-red-500 text-white rounded-md px-5 w-full py-1 cursor-pointer hover:bg-red-600"
        >
          Reset Filters
        </button>
      </div>
    </aside>
  );
};

export default ProductsFilter;
