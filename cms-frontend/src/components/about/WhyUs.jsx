import { useTranslation } from "react-i18next"
import Container from "../layout/Container"
import { GraduationCap, Award, Users } from "lucide-react"

export default function WhyUs() {

    const { t } = useTranslation()

    const items = [
        {
            icon: <GraduationCap size={28} />,
            title: t("about.why1Title"),
            text: t("about.why1Text")
        },
        {
            icon: <Award size={28} />,
            title: t("about.why2Title"),
            text: t("about.why2Text")
        },
        {
            icon: <Users size={28} />,
            title: t("about.why3Title"),
            text: t("about.why3Text")
        }
    ]

    return (

        <section className="py-24 bg-gray-50">

            <Container>

                <h2 className="text-4xl font-bold text-center text-[#0B1F3F] mb-14">
                    {t("about.whyTitle")}
                </h2>

                <div className="grid md:grid-cols-3 gap-8">

                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="p-10 bg-white rounded-xl border border-gray-200 hover:border-[#003566] hover:shadow-xl transition"
                        >

                            <div className="w-14 h-14 flex items-center justify-center bg-[#003566]/10 text-[#003566] rounded-lg mb-6">
                                {item.icon}
                            </div>

                            <h3 className="text-2xl font-semibold text-[#0B1F3F]">
                                {item.title}
                            </h3>

                            <p className="text-gray-600 mt-4 leading-relaxed text-xl">
                                {item.text}
                            </p>

                        </div>
                    ))}

                </div>

            </Container>

        </section>

    )
}