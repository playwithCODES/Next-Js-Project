import axios from "axios";
import config from "@/config/config";
export const getProducts = async ({ searchParams }) => {
  const sort = (await searchParams)?.sort ?? "";
  const min = (await searchParams)?.minPrice ?? "";
  const max = (await searchParams)?.maxPrice ?? "";
  const category = (await searchParams)?.category ?? "";
  const name = (await searchParams)?.name ?? "";
  const brand = (await searchParams)?.brand ?? "";

  console.log(config.apiUrl);
  console.log("API URL:", config.apiUrl);

  const response = await axios.get(
    `${config.apiUrl}/api/products?sort=${sort}&min=${min}&max=${max}&category=${category}&name=${name}&brand=${brand}`,
  );
  return response.data;
};

export const addProduct = async (data) => {
  const authToken = localStorage.getItem("authToken");

  console.log(authToken);
  const responses = await axios.post(`${config.apiUrl}/api/products`, data, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  return responses.data;
};
