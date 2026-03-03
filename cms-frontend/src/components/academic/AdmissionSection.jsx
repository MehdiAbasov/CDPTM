import { useTranslation } from "react-i18next"
import Container from "../layout/Container"
import { Link } from "react-router-dom"

export default function AdmissionSection() {

    const { t } = useTranslation()

    return (

        <section className="py-28 bg-linear-to-r from-[#003566] to-[#002e5f] text-white">

            <Container>

                <div className="max-w-3xl">

                    <h2 className="text-3xl font-bold">
                        {t("academic.admissionTitle")}
                    </h2>

                    <p className="mt-6 text-lg opacity-90 leading-relaxed">
                        {t("academic.admissionText")}
                    </p>

                    <a
                        target="_blank"
                        href="https://www.portal.edu.az"
                        className="inline-block mt-8 px-8 py-3 bg-[#FFD60A] text-[#003566] font-semibold rounded-lg hover:opacity-90 transition"
                    >
                        {t("academic.apply")}
                    </a>

                </div>

            </Container>

        </section>

    )
}