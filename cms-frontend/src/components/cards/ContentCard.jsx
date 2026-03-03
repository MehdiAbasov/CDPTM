import { Link } from "react-router-dom"

export default function ContentCard({item,type}){

 return(

  <Link
   to={`/${type}/${item.slug}`}
   className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden"
  >

   <img
    src={item.coverImage}
    alt={item.title}
    className="w-full h-52 object-cover"
   />

   <div className="p-5">

    <h3 className="font-bold text-lg">
     {item.title}
    </h3>

    {item.excerpt && (
     <p className="text-gray-500 mt-2">
      {item.excerpt}
     </p>
    )}

   </div>

  </Link>

 )

}