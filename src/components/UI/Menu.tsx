"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import MenuToggle, { MenuToggleRef } from "./MenuToggle";

const Menu = () => {
  const [active, setActive] = useState(false);
  const toggleRef = useRef<MenuToggleRef>(null);

  const handleClose = () => {
    toggleRef.current?.close(); // trigger animation + close
  };

  const list = [
    {name : "Home" , link : "/"},
    {name : "About Us" , link : "/about"},
    {name : "Services" , link : "/services"},
    {name : "Blog" , link : "/blog"},
    {name : "Our Team" , link : "/team"}, 
    {name : "Contact Us" , link : "/contact"}, 
    {name : "Book Appointment" , link : "/book"}, 
  ]

  return (
    <>
      <div className="flex lg:hidden">
        <MenuToggle ref={toggleRef} active={active} setActive={setActive} />
      </div>

      {active && (
        <div className="fixed inset-0 bg-primary z-10 flex flex-col text-textPrimary text-3xl font-bold gap-8 items-center justify-center" data-aos="fade-in">
          {list.map((item, i) => (
            <Link href={item.link} data-aos="fade-up" key={i} data-aos-delay={1000 + i * 200} onClick={handleClose}>
              <p className="transition-colors hover:text-secondary">{item.name}</p>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Menu;
