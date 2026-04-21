import ProductCard from "@/Components/product/Card";
import config from "@/config/config";
import axios from "axios";
import Link from "next/link";
import ProductsFilter from "@/Components/Filter";
import { getProducts } from "@/api/products";

export const metadata = {
  title: "Products | E-Bazaar",
};
const ProductsPage = async ({searchParams}) => {
 
  const products = await getProducts({searchParams});
  return(
    <section className="mx-15 py-5 grid grid-cols-1 xl:grid-cols-[1fr_4fr] gap-8">
       <ProductsFilter/>

       <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
     
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
