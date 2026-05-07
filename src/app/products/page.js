import ProductCard from "@/Components/product/Card";
import config from "@/config/config";
import axios from "axios";
import Link from "next/link";
import ProductsFilter from "@/Components/Filter";
import { getProducts } from "@/api/products";
import LoadingCard from "@/app/products/loading";

export const metadata = {
  title: "Products | E-Bazaar",
};
const ProductsPage = async ({ searchParams }) => {
  const products = await getProducts({ searchParams });
  return (
    <section className="container mx-auto px-4 py-5 grid grid-cols-1 lg:grid-cols-[1fr_4fr] gap-8">
      <ProductsFilter />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            name={product.name}
            _id={product._id}
            brand={product.brand}
            category={product.category}
            price={product.price}
            imageUrls={product.imageUrls}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductsPage;
