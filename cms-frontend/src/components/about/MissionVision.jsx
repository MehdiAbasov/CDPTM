import { useTranslation } from "react-i18next"
import Container from "../layout/Container"

export default function MissionVision(){

 const { t } = useTranslation()

 return(

  <section className="py-28 bg-linear-to-r from-[#0155ad] to-[#003566] text-white">

   <Container>

    <div className="grid md:grid-cols-2 gap-16">

     <div>

      <h3 className="text-3xl font-bold">
       {t("about.missionTitle")}
      </h3>

      <p className="mt-6 text-lg opacity-90 leading-relaxed">
       {t("about.missionText")}
      </p>

     </div>

     <div>

      <h3 className="text-3xl font-bold">
       {t("about.visionTitle")}
      </h3>

      <p className="mt-6 text-lg opacity-90 leading-relaxed">
       {t("about.visionText")}
      </p>

     </div>

    </div>

   </Container>

  </section>

 )
}