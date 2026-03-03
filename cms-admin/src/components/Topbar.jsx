import { useNavigate } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Topbar() {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (

    <div className="
    h-16
    bg-white
    border-b
    flex
    items-center
    justify-between
    px-6
    ">

      <h1 className="font-semibold">
        Admin Panel
      </h1>

      <div className="flex items-center gap-4">

        <LanguageSwitcher />

        <button
          onClick={logout}
          className="
          bg-red-500
          hover:bg-red-600
          text-white
          px-3
          py-1
          rounded
          text-sm
          "
        >
          Logout
        </button>

      </div>

    </div>

  );

}