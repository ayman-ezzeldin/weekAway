import { useState } from "react" // useEffect
import {FaBars , FaFacebookF ,FaTwitter,FaGooglePlusG,FaInstagram} from 'react-icons/fa'
// import {BsChatSquareDots} from 'react-icons/bs'
const NavBar = () => {
  const [nav,setNav] = useState(false) ;
  const handelNav = () => {
    setNav(!nav)
  }
  return (
    <div className=" w-full absolute flex justify-between min-h-[50px] bg-gray-500/60 items-center text-white">
      <ul className=" hidden sm:flex px-4">
        <li> <a href="/">Home</a> </li>
        <li> <a href="#gallery">Gallery</a></li>
        <li> <a href="#deals">Deals</a></li>
        <li> <a href="#contact">Contact</a></li>
      </ul>
      <div className="flex justify-between">
        <FaFacebookF className="mx-4" />
        <FaTwitter className="mx-4"/>
        <FaGooglePlusG className="mx-4"/>
        <FaInstagram className="mx-4"/>
      </div>
      <div className="sm:hidden z-10">
        <FaBars size={20} onClick={handelNav} className={" cursor-pointer mr-4 text-white transition"} />
      </div>
      { nav &&
      <div className=" sm:hidden w-full ease-in duration-300 absolute text-gray-300 left-0 top-0  h-screen bg-black px-4 flex flex-col">
        <ul className="w-full h-full text-center pt-20 ">
          <li className="text-2xl py-8"> <a href="/">Home</a> </li>
          <li className="text-2xl py-8"> <a href="#gallery">Gallery</a></li>
          <li className="text-2xl py-8"> <a href="#deals">Deals</a></li>
          <li className="text-2xl py-8"> <a href="#contact">Contact</a></li>
        </ul>
      </div> }
    </div>
  )
}

export default NavBar