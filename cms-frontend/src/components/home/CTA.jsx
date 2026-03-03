import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import Container from "../layout/Container"

export default function CTA() {

    const { t } = useTranslation()

    return (

        <section className="relative py-28 bg-[#003566] overflow-hidden text-white">

            <div className="absolute w-125 h-125 bg-white/10 blur-3xl rounded-full -top-37.5 -right-37.5"></div>

            <Container>

                <div className="relative  flex flex-col items-center">

                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">

                        {t("home.cta.title")}

                    </h2>

                    <p className="mt-6 text-lg opacity-90">

                        {t("home.cta.subtitle")}

                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">

                        <Link
                            target="_blank"
                            to="https://www.portal.edu.az"
                            className="px-8 py-3 bg-[#FFD60A] text-[#003566] font-semibold rounded-lg hover:opacity-90 transition"
                        >
                            {t("home.cta.primary")}
                        </Link>

                        <Link
                            to="/academic"
                            className="px-8 py-3 border border-white rounded-lg hover:bg-white hover:text-[#003566] transition"
                        >
                            {t("home.cta.secondary")}
                        </Link>

                    </div>

                </div>

            </Container>

        </section>

    )
}