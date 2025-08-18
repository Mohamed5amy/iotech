"use client";

import Link from "next/link";
import { ReactNode, useState } from "react";
import { useTranslations } from "next-intl";

const ServicesPopup = ({ children }: { children: ReactNode }) => {
  const t = useTranslations("services");

  const services = [
    { id: 0, title: t("corporateLaw") },
    { id: 1, title: t("realEstateLaw") },
    { id: 2, title: t("familyLaw") },
    { id: 3, title: t("criminalLaw") },
    { id: 4, title: t("intellectualProperty") },
    { id: 5, title: t("employmentLaw") },
    { id: 6, title: t("immigrationLaw") },
    { id: 7, title: t("bankingFinance") },
    { id: 8, title: t("commercialContracts") },
    { id: 9, title: t("taxLaw") },
    { id: 10, title: t("litigation") },
    { id: 11, title: t("arbitration") },
    { id: 12, title: t("insuranceLaw") },
    { id: 13, title: t("constructionLaw") },
    { id: 14, title: t("consumerProtection") },
    { id: 15, title: t("cyberSecurity") },
    { id: 16, title: t("dataProtection") },
    { id: 17, title: t("mergersAcquisitions") },
    { id: 18, title: t("internationalTrade") },
  ];

  const [active, setActive] = useState(false);

  return (
    <>
      {/* Trigger */}
      <div onClick={() => setActive(!active)}>{children}</div>

      {/* Popup */}
      {active && (
        <div
          className="absolute top-[calc(16px+100%)] left-0 pb-16 p-6 rounded-br-3xl rounded-bl-3xl w-full bg-primary grid grid-cols-4 gap-10 overflow-hidden"
          data-aos="fade-up"
        >
          {services.map((service, idx) => (
            <Link
              href={"/service#details"}
              onClick={() => setActive(false)}
              data-aos="fade-left"
              data-aos-delay={idx * 150}
              key={service.id}
            >
              <h3 className="text-white/70 transition-all hover:translate-x-1 hover:text-white cursor-pointer">
                {service.title}
              </h3>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default ServicesPopup;
