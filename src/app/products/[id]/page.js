import config from "@/config/config";
import axios from "axios";
async function fetchById(id) {
  const response = await axios.get(`${config.apiUrl}/api/products/${id}`);
  return response.data;
}

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const product = await fetchById(id);
  return {
    title: product?.name,
  };
};

const ProductByIdPage = async ({ params, searchParams }) => {
  const { id } = await params;
  const query = await searchParams;

  const product = await fetchById(id);

  console.log(product);
  return (
    <section>
      <div className="container mx-auto py-10">
        <h1 className="text-5xl">{product.name}</h1>
        <p>Brand:{product.brand}</p>
        <p>Category:{product.category}</p>
        <p>Rs.{product.price}</p>
      </div>
    </section>
  );
};

export default ProductByIdPage;
