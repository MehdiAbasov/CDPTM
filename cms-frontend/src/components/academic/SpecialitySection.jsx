import Container from "../layout/Container"
import useFetch from "../../hooks/useFetch"
import { useTranslation } from "react-i18next"

export default function SpecialitiesSection(){

 const { t } = useTranslation()
 const { data: programs, loading } = useFetch("/programs")

 if(loading) return null

 return(

  <section className="py-24">

   <Container>

    <h2 className="text-3xl font-bold text-[#0B1F3F] mb-14">
     {t("academic.specialitiesTitle")}
    </h2>


    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

     {programs.map(item=>(
      <div
       key={item._id}
       className="p-8 bg-white rounded-xl border border-gray-200 hover:border-[#003566] hover:shadow-xl transition"
      >

       <h3 className="text-xl font-semibold text-[#0B1F3F]">
        {item.name}
       </h3>

       <p className="text-gray-600 mt-4 leading-relaxed line-clamp-3">
        {item.description}
       </p>

      </div>
     ))}

    </div>

   </Container>

  </section>

 )
}