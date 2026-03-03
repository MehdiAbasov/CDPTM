import { useTranslation } from "react-i18next"
import { Users, BookOpen, GraduationCap } from "lucide-react"
import { Link } from "react-router-dom"

export default function Hero() {

    const { t } = useTranslation()

    return (

        <section className="relative h-svh max-sm:h-160 w-full overflow-hidden">

            <video
                autoPlay
                muted
                loop
                className="absolute w-full h-full object-cover inset-0"
            >
                <source src="https://res.cloudinary.com/mehdi-abasov-official/video/upload/v1772565329/Video_Project_ucfpqm.mp4" />
            </video>

            <div className="absolute inset-0 bg-linear-to-r from-[#020617e6] via-[#020617cc] to-transparent"></div>

            <div className="relative container z-10  h-full flex items-center ">

                <div className="text-white md:pt-14 max-sm:pt-24 container">

                    {/* TITLE */}
                    <h1 className="max-sm:text-[40px] max-w-150 md:text-6xl max-lg:text-6xl font-bold leading-tight">
                        {t("home.heroTitle")}
                    </h1>

                    {/* SUBTITLE */}
                    <p className="mt-6 text-xl text-gray-300 max-w-xl leading-relaxed">
                        {t("home.heroText")}
                    </p>

                    {/* BUTTONS */}
                    <div className="mt-10 flex gap-4">

                        <Link to="/contact" className="px-8 py-3 bg-blue-700 hover:bg-blue-800 transition-all duration-300 rounded-lg font-semibold shadow-lg hover:scale-105">
                            {t("home.linkTxt1")}
                        </Link>

                        <Link to="/academic" className="px-8 py-3 border border-white/30 hover:border-white transition rounded-lg backdrop-blur-sm">
                            {t("home.linkTxt2")}
                        </Link>

                    </div>

                    {/* stats */}
                    <div className="absolute bottom-5 pr-5 max-sm:hidden">
                        <div className="flex max-sm:w-full flex-wrap gap-5 max-sm:justify-between max-sm:gap-1 max-sm:mt-10">

                            <div className="flex items-center gap-4 bg-white/2 backdrop-blur-lg px-6 py-4 rounded-xl border border-white/10 max-sm:w-48/100">
                                <BookOpen size={22} />
                                <div>
                                    <h3 className="text-xl font-bold">20+</h3>
                                    <p className="text-sm text-gray-300">{t("home.tchrText")}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 bg-white/2 backdrop-blur-lg px-6 py-4  rounded-xl border border-white/10 max-sm:w-48/100">
                                <GraduationCap size={22} />
                                <div>
                                    <h3 className="text-xl font-bold">1000+</h3>
                                    <p className="text-sm text-gray-300">{t("home.stdTxt")}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 bg-white/2 backdrop-blur-lg px-6 py-4 rounded-xl border border-white/10 max-sm:w-full max-sm:mt-3">
                                <Users size={22} />
                                <div>
                                    <h3 className="text-xl font-bold">150+</h3>
                                    <p className="text-sm text-gray-300">{t("home.prgrmTxt")}</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </section>

    )

}