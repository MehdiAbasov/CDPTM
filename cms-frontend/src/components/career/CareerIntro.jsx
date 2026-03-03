import { useTranslation } from "react-i18next"
import Container from "../layout/Container"

export default function CareerIntro(){

 const { t } = useTranslation()

 return(

  <section className="py-24 bg-white">

   <Container>

    <div className="max-w-4xl">

     <h2 className="text-3xl font-bold text-[#0B1F3F]">
      {t("career.introTitle")}
     </h2>

     <p className="mt-6 text-lg text-gray-600 leading-relaxed">
      {t("career.introText")}
     </p>

    </div>

   </Container>

  </section>

 )
}