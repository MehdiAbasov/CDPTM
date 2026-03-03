import useContent from "../../hooks/useContent"
import ContentCard from "../../components/cards/ContentCard"

export default function Programs(){

 const {items,loading} = useContent("programs")

 if(loading) return null

 return(

  <section className="container py-20">

   <h1 className="text-4xl font-bold mb-10">
    Programs
   </h1>

   <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

    {items.map(item=>(
     <ContentCard key={item._id} item={item} type="programs"/>
    ))}

   </div>

  </section>

 )

}