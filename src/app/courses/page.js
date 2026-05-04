"use client";
import { useSelector } from "react-redux";
const CoursesPage = () => {
  const counterValue=useSelector((state)=>state.counter.value);
  return (
    <div>
      Hello from the courses page
         <p>Counter Value: {counterValue}</p>
    </div>
  )
}

export default CoursesPage;
