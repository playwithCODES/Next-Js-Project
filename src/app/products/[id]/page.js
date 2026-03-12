const ProductByIdPage =async  ({ params }) => {
  const {id}=await params;

  return (
    <div>
      <h1>Product id is {id}</h1>
    </div>
  );
};

export default ProductByIdPage;