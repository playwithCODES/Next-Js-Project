"use client";
import { increment } from "@/redux/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";

const ContactPage = () => {
  const counterValue = useSelector((state)=>state.counter.value);
  const dispatch=useDispatch();
  return (
    <div>
      <h1>Contact Page</h1>
      <button className="px-2 py-2 bg-green-500 rounded-xl mx-2 my-2"
      onClick={()=>dispatch(increment())}>
        Click to increase the value
      </button>
      <p>Counter Value: {counterValue}</p>
    </div>
  )
}

export default ContactPage;


