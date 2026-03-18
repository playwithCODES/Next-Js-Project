import ProductCard from "@/Components/product/Card";
import config from "@/config/config";
import axios from "axios";
import Link from "next/link";

export const metadata = {
  title: "Products | E-Bazaar",
};
const ProductsPage = async () => {
  const response = await axios.get(`${config.apiUrl}/api/products`);
  const products = response.data;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
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
  );
};

export default ProductsPage;
