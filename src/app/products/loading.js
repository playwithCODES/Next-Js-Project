import React from "react";
import Image from "next/image";
import loading from '@/assets/images/loading.gif'
const loadingProducts = () => {
  return (
    <div className="flex items-center justify-center">
        <Image src={loading} alt="loading" height={400} width={400} className =''/>
    </div>
  )
}

export default loadingProducts;
