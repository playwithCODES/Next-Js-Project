import axios from "axios";
import config from "@/config/config";
export const getProducts = async ({searchParams}) => {
  const sort=(await searchParams)?.sort?? "";
  const min=(await searchParams)?.minPrice?? "";
  const max=(await searchParams)?.maxPrice?? "";

  const response = await axios.get(`${config.apiUrl}/api/products?sort=${sort}&min=${min}&max=${max}`);
  return response.data;
}