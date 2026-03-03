export default function SkeletonCard(){

 return(

  <div className="animate-pulse bg-white rounded-xl shadow overflow-hidden">

   <div className="bg-gray-300 h-48 w-full"></div>

   <div className="p-5 space-y-3">

    <div className="bg-gray-300 h-4 w-3/4"></div>

    <div className="bg-gray-300 h-4 w-1/2"></div>

   </div>

  </div>

 )

}