export const metadata={
  title:"About Us - Electronics E-commerce",
  description:"Learn more about our electronics e-commerce store, our mission, and our commitment to providing the best online shopping experience for electronics enthusiasts.",
}

const AboutPage = async ({ searchParams })=>{
  const query=await searchParams;
  const id=query?.id;
  if(!Number.isInteger(parseInt(id))){
    console.log("not a number");
    throw new Error(" Invalid id parameter.  Id must be an integer.");
  }

  if(parseInt(id)>100){
    throw new Error("Id exceeded the limit 100");
  }
 return <div className="text-7xl">Id: {parseInt(id)}</div>
};

export default AboutPage;