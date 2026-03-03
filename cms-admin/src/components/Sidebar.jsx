import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Sidebar() {

  const { t } = useTranslation();
  const location = useLocation();

  const menu = [
    { name: t("dashboard"), path: "/" },
    { name: t("news"), path: "/news" },
    { name: t("events"), path: "/events" },
    // { name: t("gallery"), path: "/gallery" },
    { name: t("programs"), path: "/programs" },
    // { name: t("teachers"), path: "/teachers" },
    { name: t("vacancy"), path: "/vacancies" },
    // { name: t("settings"), path: "/settings" }
  ];

  return (

    <aside className="
    w-64
    bg-white
    border-r
    flex
    flex-col
    ">

      {/* LOGO */}
      <div className="
      h-16
      flex
      items-center
      px-6
      border-b
      font-bold
      text-lg
      ">
        CMS
      </div>

      {/* MENU */}
      <nav className="flex-1 p-4 space-y-1">

        {menu.map(item => {

          const active =
            location.pathname === item.path;

          return (

            <Link
              key={item.path}
              to={item.path}
              className={`
              block
              px-4
              py-2
              rounded-lg
              text-sm
              transition
              ${active
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:bg-gray-100"}
              `}
            >
              {item.name}
            </Link>

          );

        })}

      </nav>

    </aside>

  );

}