import { notFound } from "next/navigation";

const NewsDetailsPage = async ({ params }) => {
    const data=["general","sports","technology","education"];
  const slug = (await params).slug;

  const foundData=data.find((item)=>slug.includes(item));

  if(!foundData){
    throw notFound();
  }
  return (
    <div className="text-5xl text-grey-500 flex flex-col items-center justify-center h-screen gap-5">
      <h1>NewsDetailsPage</h1>
      <ul>
        {slug.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default NewsDetailsPage;

