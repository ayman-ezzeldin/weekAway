import { BsChatSquareDots } from "react-icons/bs"
const Footer = () => {
  return (
    <div className="max-w-[1140px] m-auto w-full border-t-4 py-8">
      <div className="flex justify-center items-center">
        <BsChatSquareDots size={20} className="text-[var(--primary-dark)] mr-2"/>
        <h1 className=" text-xl font-bold text-gray-700">WEEKAWAY</h1>
      </div>
    </div>
  )
}

export default Footer