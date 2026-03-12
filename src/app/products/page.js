import config from "@/config/config";
import axios from "axios";

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
            <div key={product._id}>
              {product.name} {product.brand} {product.price}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
