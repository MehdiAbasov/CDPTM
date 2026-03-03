import { useTranslation } from "react-i18next"
import Container from "../layout/Container"
export default function EducationSection() {

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

                        <video
                            loop
                            autoPlay
                            muted
                            className="relative rounded-xl shadow-xl object-cover w-full h-104"
                        >
                            <source src="https://res.cloudinary.com/mehdi-abasov-official/video/upload/v1772565329/Video_Project_ucfpqm.mp4" type="video/mp4" />
                        </video >

                    </div>

                </div>

            </Container>

        </section>

    )
}