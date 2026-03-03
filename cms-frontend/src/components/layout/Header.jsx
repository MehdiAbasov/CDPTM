import { useState } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import LanguageSwitcher from "./LanguageSwitcher"
import { ChevronDownIcon } from "lucide-react"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6"

export default function Header() {

    const [open, setOpen] = useState(false)

    const { t } = useTranslation()

    return (

        <header className="fixed top-0 w-full z-50">

            {/* TOP BAR */}

            <div className="bg-[#003566] max-sm:hidden">

                <div className="container flex items-center justify-between py-1 px-3 text-sm text-white">

                    <div className="flex gap-4">

                        <span className="hover:text-blue-600 cursor-pointer">
                            <FaFacebook size="20px" />
                        </span>

                        <span className="hover:text-blue-600 cursor-pointer">
                            <FaInstagram size="20px" />
                        </span>

                        <span className="hover:text-blue-600 cursor-pointer">
                            <FaLinkedin size="20px" />
                        </span>

                    </div>

                    <div className="flex items-center gap-3">
                        <div className="hidden lg:block">
                            <LanguageSwitcher />
                        </div>
                        <Link to="https://www.portal.edu.az" target="_blank" className="cursor-pointer text-xs border border-blue-600 bg-blue-600 text-white px-3 py-1.5 rounded-md hover:bg-blue-700">
                            Apply Now
                        </Link>

                        <Link to="/contact" className="cursor-pointer text-xs border border-gray-300 py-1.5 px-3 rounded-md">
                            Contact
                        </Link>


                    </div>

                </div>
            </div>


            {/* MAIN NAVBAR */}

            <div className="bg-[#003566]">

                <div className="container flex items-center justify-between h-20 py-1">

                    {/* logo */}
                    <div className="h-full">
                        <Link
                            to="/"
                        >

                            <img src="./logo.png" className="h-full" alt="" />

                        </Link>
                    </div>

                    {/* desktop menu */}

                    <nav className="hidden lg:flex items-center gap-8 text-white font-bold text-lg">

                        <Link
                            to="/"
                            className=" transition"
                        >
                            {t("nav.home")}
                        </Link>

                        <Link
                            to="/about"
                            className=" transition"
                        >
                            {t("nav.about")}
                        </Link>

                        <Link
                            to="/academic"
                            className=" transition"
                        >
                            {t("nav.academic")}
                        </Link>



                        <Link
                            to="/career"
                            className=" transition"
                        >
                            {t("nav.career")}
                        </Link>

                        <Link
                            to="/campus"
                            className=" transition"
                        >
                            {t("nav.campus")}
                        </Link>

                        <Link
                            to="/news"
                            className=" transition"
                        >
                            {t("nav.news")}
                        </Link>

                        <Link
                            to="/events"
                            className=" transition"
                        >
                            {t("nav.events")}
                        </Link>

                    </nav>





                    {/* mobile button */}

                    <button
                        className="lg:hidden text-2xl text-white"
                        onClick={() => setOpen(!open)}
                    >

                        ☰

                    </button>

                </div>
            </div>


            {/* mobile menu */}

            {open && (

                <div className="lg:hidden backdrop-blur-xl bg-[#003566] border-t border-white">

                    <nav className="flex flex-col p-6 gap-4 text-white">

                        <Link to="/">
                            {t("nav.home")}
                        </Link>

                        <Link to="/about">
                            {t("nav.about")}
                        </Link>

                        <Link to="/education">
                            {t("nav.education")}
                        </Link>

                        <Link to="/speciality">
                            {t("nav.speciality")}
                        </Link>

                        <Link to="/admission">
                            {t("nav.admission")}
                        </Link>

                        <Link to="/career">
                            {t("nav.career")}
                        </Link>

                        <Link to="/campus">
                            {t("nav.campus")}
                        </Link>

                        <Link to="/news">
                            {t("nav.news")}
                        </Link>

                        <Link to="/events">
                            {t("nav.events")}
                        </Link>

                        <div className="mt-3">
                            <LanguageSwitcher />
                        </div>
                        <div className="flex gap-4 text-white">

                            <Link to="">
                                <FaFacebook size="20px" />
                            </Link>

                            <Link to="">
                                <FaInstagram size="20px" />
                            </Link>

                            <Link to="">
                                <FaLinkedin size="20px" />
                            </Link>

                        </div>
                    </nav>

                </div>

            )}

        </header>

    )

}