import ProductsBanner from "@/Components/product/Banner";



const ProductsLayout = ({children}) => {
  return (
    <div>
        <ProductsBanner/>
      {children}
    </div>
  )
}

export default ProductsLayout;
