import { useTranslation } from "react-i18next"
import Container from "../layout/Container"
import aboutImage from "../../../public/nevsheader.jpg"

export default function AboutIntro() {

    const { t } = useTranslation()

    return (

        <section className="py-24 bg-white">

            <Container>

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <div>

                        <h2 className="text-5xl font-bold text-[#0B1F3F] leading-tight">
                            {t("about.introTitle")}
                        </h2>

                        <p className="mt-6 text-gray-600 leading-relaxed text-xl">
                            {t("about.introText")}
                        </p>

                    </div>

                    <div className="relative">

                        <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-[#FFD60A] rounded-xl"></div>

                        <img
                            src={aboutImage}
                            className="relative rounded-xl shadow-xl object-cover w-full h-104"
                        />

                    </div>

                </div>

            </Container>

        </section>

    )
}