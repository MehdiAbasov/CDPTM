import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube
} from "react-icons/fa"

export default function Footer() {

    const { t } = useTranslation()

    return (

        <footer className="bg-[#003566] text-white">

            <div className="max-w-7xl mx-auto px-6 py-20">

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Column 1 */}
                    <div>

                        <img src="/logo.png" alt="" />

                        <p className="text-gray-300 leading-relaxed mt-5">

                            {t("footer.description")}

                        </p>

                    </div>

                    {/* Column 2 */}
                    <div>

                        <h4 className="font-semibold mb-4">
                            {t("footer.quickLinks")}
                        </h4>

                        <ul className="space-y-3 text-gray-300">

                            <li><Link to="/about" className="hover:text-white transition">{t("nav.about")}</Link></li>
                            <li><Link to="/news" className="hover:text-white transition">{t("nav.news")}</Link></li>
                            <li><Link to="/events" className="hover:text-white transition">{t("nav.events")}</Link></li>
                            <li><Link to="/career" className="hover:text-white transition">{t("nav.career")}</Link></li>
                            <li><Link to="/academic" className="hover:text-white transition">{t("nav.academic")}</Link></li>

                        </ul>

                    </div>

                    {/* Column 3 */}
                    <div>

                        <h4 className="font-semibold mb-4">
                            {t("footer.academic")}
                        </h4>

                        <ul className="space-y-3 text-gray-300">

                            <li><Link to="/contact" className="hover:text-white transition">{t("nav.contact")}</Link></li>
                            <li><Link to="/about" className="hover:text-white transition">{t("nav.about")}</Link></li>

                        </ul>

                    </div>

                    {/* Column 4 */}
                    <div>

                        <h4 className="font-semibold mb-4">
                            {t("footer.contact")}
                        </h4>

                        <ul className="space-y-3 text-gray-300">

                            <li>📍 Cəlilabad, Azərbaycan</li>
                            <li>📞 +994 00 000 00 00</li>
                            <li>✉ info@cms.az</li>

                        </ul>

                        <div className="flex gap-4 mt-6">

                            <a href="#" className="hover:text-[#FFD60A] transition">
                                <FaFacebookF />
                            </a>

                            <a href="#" className="hover:text-[#FFD60A] transition">
                                <FaInstagram />
                            </a>

                            <a href="#" className="hover:text-[#FFD60A] transition">
                                <FaLinkedinIn />
                            </a>

                            <a href="#" className="hover:text-[#FFD60A] transition">
                                <FaYoutube />
                            </a>

                        </div>

                    </div>

                </div>

            </div>

            {/* Bottom bar */}

            <div className="border-t border-white/10 py-6 text-center text-gray-400 text-sm">

                © {new Date().getFullYear()} CMS Peşə Təhsil Mərkəzi. {t("footer.rights")}

            </div>

        </footer>

    )
}