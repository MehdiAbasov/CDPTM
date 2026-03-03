import Container from "../layout/Container"

export default function AboutStats(){

 const stats = [
  { number:"1200+", label:"Tələbə" },
  { number:"25+", label:"Proqram" },
  { number:"40+", label:"Təlimçi" },
  { number:"60+", label:"Partnyor" }
 ]

 return(

  <section className="py-24 bg-white">

   <Container>

    <div className="grid md:grid-cols-4 gap-10 text-center">

     {stats.map((item,index)=>(
      <div key={index}>

       <h3 className="text-4xl font-bold text-[#003566]">
        {item.number}
       </h3>

       <p className="text-gray-600 mt-2">
        {item.label}
       </p>

      </div>
     ))}

    </div>

   </Container>

  </section>

 )
}