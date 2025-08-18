"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { useTranslations } from "next-intl";
import MenuToggle, { MenuToggleRef } from "./MenuToggle";

const Menu = () => {
  const [active, setActive] = useState(false);
  const toggleRef = useRef<MenuToggleRef>(null);
  const t = useTranslations("components.menu");

  const handleClose = () => {
    toggleRef.current?.close(); // trigger animation + close
  };

  const list = [
    { name: t("home"), link: "/" },
    { name: t("aboutUs"), link: "/about" },
    { name: t("services"), link: "/service#details" },
    { name: t("blog"), link: "/blog" },
    { name: t("ourTeam"), link: "/team" },
    { name: t("contactUs"), link: "/contact" },
    { name: t("bookAppointment"), link: "/book" },
  ];

  return (
    <>
      <div className="flex lg:hidden">
        <MenuToggle ref={toggleRef} active={active} setActive={setActive} />
      </div>

      {active && (
        <div
          className="fixed inset-0 bg-primary z-10 flex flex-col text-textPrimary text-3xl font-bold items-center justify-center"
          data-aos="fade-in"
        >
          {list.map((item, i) => (
            <Link
              href={item.link}
              data-aos="fade-up"
              key={i}
              data-aos-delay={1000 + i * 200}
              onClick={handleClose}
            >
              <p className="transition-colors hover:text-white/70 pb-8">
                {item.name}
              </p>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Menu;
