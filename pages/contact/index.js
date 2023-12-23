import DefaultLayout from "../interface/components/DefaultLayout";
import { FaAngleRight } from "react-icons/fa6";

export default function Contact(){
  return(
    <DefaultLayout>
      <h1 className="inline-flex items-center gap-2 font-bold text-3xl">
          <FaAngleRight size={20} /> Contact
        </h1>
    </DefaultLayout>
  )
}