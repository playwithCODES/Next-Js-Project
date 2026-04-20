"use client";
const ErrorComponent = ({error}) => {
  return (
    <section className="py-20">
        <div className="container mx-auto  px-6">
            <div className="flex items-center justify-center flex-col text-6xl
             text-red-600">
                <div className="text-4xl font-semibold mb-10">Oops! Something went wrong!</div>
                <div className="text-lg ">{error.message}</div>

            </div>

        </div>

    </section>
   
  )
}

export default ErrorComponent;

