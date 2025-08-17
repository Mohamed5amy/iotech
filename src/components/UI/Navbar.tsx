import Image from "next/image"
import Link from "next/link"
import Button from "../UI/Button"
import {Search} from "@/icons/Icons"
import ScrollWrapper from "../ScrollWrapper"
import ServicesPopup from "./ServicesPopup"
import { arrowIcon } from "@/Icons"
import Menu from "./Menu"

const list = [
  {name : "Home" , link : "/"},
  {name : "About Us" , link : "/about"},
  {name : "Services" , link : "/services"},
  {name : "Blog" , link : "/blog"},
  {name : "Our Team" , link : "/team"}, 
  {name : "Contact Us" , link : "/contact"}, 
]

const Navbar = () => {
  return (
    <ScrollWrapper 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent py-4"
      scrolledClassName="!bg-primary shadow-lg"
    >
      <div className="container flex items-center justify-between relative">
        {/* Logo */}
        <Image src={"/images/logo.svg"} alt="Logo" width={120} height={100} className="w-[90px] md:w-[120px]" />
        {/* Link List */}
        <div className="items-center hidden lg:flex">
          {list.map((item , idx) => {
            if (item.name !== "Services") {
              return (
                <Link href={item.link} key={idx} className="px-3 font-medium relative group hover:text-white/70 transition-all hover:-translate-y-1"> 
                  {item.name}
                  <span className="absolute w-1.5 h-1.5 rounded-full bg-white -bottom-5 left-1/2 -translate-x-1/2 group-hover:-bottom-2 transition-all opacity-0 group-hover:opacity-70 duration-700"></span>
                </Link>
              )
            } else {
              return (
                <ServicesPopup key={idx}>
                  <button className="px-3 font-medium relative group hover:text-white/70 transition-all hover:-translate-y-1 flex items-center"> 
                    {item.name}
                    <span className="scale-50 -rotate-90">{arrowIcon}</span>
                    <span className="absolute w-1.5 h-1.5 rounded-full bg-white -bottom-5 left-1/2 -translate-x-1/2 group-hover:-bottom-2 transition-all opacity-0 group-hover:opacity-70 duration-700"></span>
                  </button>
                </ServicesPopup>
              )
            }
          })}
        </div>
        {/* Search & Book */}
        <div className="flex items-center gap-4 lg:gap-8">
          <Search />
          <Button label="Book Appointment" className="p-3 hover:bg-white hover:text-primary font-medium text-sm hidden lg:flex" />
          {/* Menu */}
          <Menu />
        </div>
      </div>
    </ScrollWrapper>
  )
}

export default Navbar