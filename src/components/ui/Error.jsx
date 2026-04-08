import { MdErrorOutline } from "react-icons/md";

export const Error = ({text}) => {
  return(
    <div className="flex flex-row gap-3 w-full justify-center items-center">
      <MdErrorOutline className="text-red-400 text-2xl"/>
      <p className="">{text}</p>
    </div>
  );
};