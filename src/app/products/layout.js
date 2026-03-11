import ProductsBanner from "@/Components/products/Banner";

const ProductsLayout = ({children}) => {
  return (
    <div>
        <ProductsBanner/>
      {children}
    </div>
  )
}

export default ProductsLayout;
