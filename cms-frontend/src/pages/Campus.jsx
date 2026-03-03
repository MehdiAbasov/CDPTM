import PageHeader from "../components/layout/PageHeader"
import { useTranslation } from "react-i18next"
import campus1 from "../../public/campus1.jpg"
import campus2 from "../../public/campus2.jpg"
import campus3 from "../../public/campus1.jpg"
import { GraduationCap, Building2, Users } from "lucide-react"

export default function Campus(){

 const { t } = useTranslation()

 return(
  <>
   <PageHeader
    title="campus.title"
    subtitle="campus.subtitle"
   />

   {/* BIG HERO IMAGE */}

   <section className="relative h-125">
    <img
     src={campus1}
     className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/40"></div>
   </section>

   {/* SECTION 1 */}

   <section className="py-32 bg-white">
    <div className="max-w-7xl mx-auto px-6">

     <div className="grid lg:grid-cols-2 gap-24 items-center">

      <div>
       <h2 className="text-4xl font-bold text-[#0B1F3F]">
        {t("campus.block1Title")}
       </h2>

       <p className="mt-8 text-lg text-gray-600 leading-relaxed">
        {t("campus.block1Text")}
       </p>
      </div>

      <img
       src={campus2}
       className="rounded-2xl shadow-2xl h-120 w-full object-cover"
      />

     </div>

    </div>
   </section>

   {/* SECTION 2 (Reverse Layout) */}

   <section className="py-32 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">

     <div className="grid lg:grid-cols-2 gap-24 items-center">

      <img
       src={campus3}
       className="rounded-2xl shadow-2xl h-120 w-full object-cover order-2 lg:order-1"
      />

      <div className="order-1 lg:order-2">
       <h2 className="text-4xl font-bold text-[#0B1F3F]">
        {t("campus.block2Title")}
       </h2>

       <p className="mt-8 text-lg text-gray-600 leading-relaxed">
        {t("campus.block2Text")}
       </p>
      </div>

     </div>

    </div>
   </section>

   {/* FACILITIES PREMIUM GRID */}

   <section className="py-32 bg-white">
    <div className="max-w-7xl mx-auto px-6">

     <h2 className="text-4xl font-bold text-center text-[#0B1F3F] mb-20">
      {t("campus.infrastructure")}
     </h2>

     <div className="grid md:grid-cols-3 gap-12">

      <div className="p-12 border border-gray-200 rounded-2xl hover:shadow-xl transition">
       <GraduationCap size={40} className="text-[#003566] mb-6"/>
       <h3 className="text-2xl font-semibold text-[#0B1F3F]">
        Laboratoriyalar
       </h3>
       <p className="mt-4 text-gray-600">
        Müasir avadanlıqlarla təchiz olunmuş praktik mühit.
       </p>
      </div>

      <div className="p-12 border border-gray-200 rounded-2xl hover:shadow-xl transition">
       <Building2 size={40} className="text-[#003566] mb-6"/>
       <h3 className="text-2xl font-semibold text-[#0B1F3F]">
        Tədris Binaları
       </h3>
       <p className="mt-4 text-gray-600">
        Rahat və texnoloji cəhətdən inkişaf etmiş tədris otaqları.
       </p>
      </div>

      <div className="p-12 border border-gray-200 rounded-2xl hover:shadow-xl transition">
       <Users size={40} className="text-[#003566] mb-6"/>
       <h3 className="text-2xl font-semibold text-[#0B1F3F]">
        Sosial Mühit
       </h3>
       <p className="mt-4 text-gray-600">
        Tələbələr üçün yaradılmış rahat sosial və inkişaf zonaları.
       </p>
      </div>

     </div>

    </div>
   </section>

   {/* CAMPUS STATS */}

   <section className="py-28 bg-linear-to-r from-[#003566] to-[#001D3D] text-white">
    <div className="max-w-7xl mx-auto px-6">

     <div className="grid md:grid-cols-4 gap-12 text-center">

      <div>
       <h3 className="text-4xl font-bold">5000m²</h3>
       <p className="mt-2 opacity-90">Kampus sahəsi</p>
      </div>

      <div>
       <h3 className="text-4xl font-bold">20+</h3>
       <p className="mt-2 opacity-90">Tədris otağı</p>
      </div>

      <div>
       <h3 className="text-4xl font-bold">10+</h3>
       <p className="mt-2 opacity-90">Laboratoriya</p>
      </div>

      <div>
       <h3 className="text-4xl font-bold">1000+</h3>
       <p className="mt-2 opacity-90">Tələbə</p>
      </div>

     </div>

    </div>
   </section>
  </>
 )
}