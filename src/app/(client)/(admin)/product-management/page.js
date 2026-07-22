import Link from "next/link";
const ProductManagementPage = () => {
  return (
    <div>
      <h4>Product Management</h4>
      <Link href="/product-management/add">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add Product
        </button>
      </Link>
    </div>
  )
}

export default ProductManagementPage;
