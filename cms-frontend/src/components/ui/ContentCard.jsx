import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

export default function ContentCard({item,type}){

 const { i18n } = useTranslation()

 const lang = i18n.language || "az"

 return(

  <Link
   to={`/${type}/${item.slug}`}
   className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden"
  >

   <img
    src={item.image}
    alt={item.title?.[lang]}
    className="w-full h-56 object-cover"
   />

   <div className="p-5">

    <h3 className="font-bold text-lg">

     {item.title?.[lang]}

    </h3>

   </div>

  </Link>

 )

}