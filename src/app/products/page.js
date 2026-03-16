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
    <section className="py-8">
      <div className="Container mx-auto px-10">
        <div className="grid grid-cols-1 gap-2">
          {products.map((product) => (
            <Link href={`/products/${product._id}`} key={product._id} className="hover:text-primary">
              {product.name} {product.brand} {product.price}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
