import { getTranslations } from "next-intl/server";
import Link from "next/link";

const Copyrights = async () => {
  const t = await getTranslations("components.footer");

  const list = [
    { name: t("about"), link: "/" },
    { name: t("ourStrategy"), link: "/" },
    { name: t("ourAdvantages"), link: "/" },
    { name: t("socialResponsibility"), link: "/" },
    { name: t("ourServices"), link: "/" },
  ];

  return (
    <div className="container pt-4 md:pt-12 flex flex-col md:flex-row gap-8 md:gap-0 items-center justify-between">
      {/* Link List */}
      <div className="flex items-center flex-col md:flex-row gap-2 md:gap-0">
        {list.map((item, idx) => {
          return (
            <Link
              href={item.link}
              key={idx}
              className="px-3 font-medium relative group hover:text-white/70 transition-all hover:-translate-y-1"
            >
              {item.name}
              <span className="absolute w-1.5 h-1.5 rounded-full bg-white -bottom-5 left-1/2 -translate-x-1/2 group-hover:-bottom-2 transition-all opacity-0 group-hover:opacity-70 duration-700"></span>
            </Link>
          );
        })}
      </div>
      {/* Rights */}
      <p>
        © {new Date().getFullYear()} . {t("allRightsReserved")}
      </p>
    </div>
  );
};

export default Copyrights;
