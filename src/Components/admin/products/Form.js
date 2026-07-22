"use client";
import { toast } from "react-toastify";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import { useCallback } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
import { addProduct } from "@/api/products";
import { useRouter } from "next/navigation";
import Spinner from "@/Components/Spinner";
const ProductForm = () => {
  const { register, handleSubmit } = useForm();
  const [selectedImages, setSelectedImages] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    setImageFiles(acceptedFiles);

    const images = acceptedFiles.map((file) => ({
      ...file,
      name: file.name,
      url: URL.createObjectURL(file),
    }));

    setSelectedImages(images);
  }, []);

  const { getRootProps, getInputProps} = useDropzone({ onDrop });

  function removeImage(index) {
    setSelectedImages((prev) => prev.filter((_, i) => i !== index));
    setImageFiles((prev) => prev.filter((_, i) => i !== index));
  }

  async function submitForm(data) {
    setLoading(true);
    console.log(data);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("brand", data.brand);
    formData.append("price", data.price);
    formData.append("category", data.category);
    formData.append("stock", data.stock ?? 1);
    if (data.description) formData.append("description", data.description);

    if (imageFiles.length > 0) {
      imageFiles.map((file) => {
        formData.append("images", file);
      });
    }
    addProduct(formData)
      .then((data) => {
        toast.success("Product created successfully");
        router.back();
      })
      .catch((error) => toast.error(error.response?.data))
      .finally(() => setLoading(false));
  }

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <div className="sm:col-span-2">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Product Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-2  focus:ring-primary/50 outline-primary focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 "
            placeholder="Type product name"
            required
            {...register("name")}
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="brand"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Brand
          </label>
          <input
            type="text"
            id="brand"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-2  focus:ring-primary/50 outline-primary focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Product brand"
            required
            {...register("brand")}
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-2  focus:ring-primary/50 outline-primary focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Enter the Price"
            required
            {...register("price")}
          />
        </div>

        <div className="w-full">
          <label
            htmlFor="category"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Category
          </label>
          <input
            type="text"
            id="category"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-2  focus:ring-primary/50 outline-primary focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Product category"
            required
            {...register("category")}
          />
        </div>
        <div>
          <label
            htmlFor="stock"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Stock
          </label>
          <input
            type="number"
            id="stock"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-2  focus:ring-primary/50 outline-primary focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder={1}
            required
            {...register("stock")}
          />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="images"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Product Image
          </label>

          <div className="flex items-center justify-center w-full">
            <div
              htmlFor="dropzone-file"
              className="rounded-lg flex flex-col items-center justify-center w-full bg-neutral-secondary-medium border border-dashed border-gray-300 border-default-strong rounded-base cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
              {...getRootProps()}
            >
              <div className="flex flex-col items-center justify-center text-body pt-5 py-10">
                <svg
                  className="w-8 h-8 mb-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h3a3 3 0 0 0 0-6h-.025a5.56 5.56 0 0 0 .025-.5A5.5 5.5 0 0 0 7.207 9.021C7.137 9.017 7.071 9 7 9a4 4 0 1 0 0 8h2.167M12 19v-9m0 0-2 2m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs">JPEG, PNG, JPG (MAX. 5 MB)</p>
              </div>
              <input {...getInputProps({ accept: ".png, .jpg, .jpeg" })} />
            </div>
          </div>

          {selectedImages.map((image, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-2 flex items-center gap-4 mt-2"
            >
              <Image
                src={image.url}
                alt=""
                height={100}
                width={100}
                className="h-16 w-16 rounded-lg object-contain"
              />
              {/* <div className="h-16 w-16 rounded-lg bg-gray-300"></div> */}
              <h4 className=" flex-1 ">{image.name}</h4>
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="p-2 bg-red-500 text-white rounded cursor-pointer"
              >
                <FaTimes />
              </button>
            </div>
          ))}
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <textarea
            id="description"
            rows={8}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-2  focus:ring-primary/50 outline-primary focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Your description here"
            defaultValue={""}
            {...register("description")}
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={loading}
        className="disabled:opacity-80 inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-blue-700"
      >
        <span className="mr-2"> Add product</span>
        {loading ?  <Spinner className="w-6 h-6 fill-primary" />:<FaPlus/> }
       
      
      </button>
    </form>
  );
};

export default ProductForm;
