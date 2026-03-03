import Container from "../layout/Container"

export default function SkillsSection(){

 const skills = [
  "Peşəkar praktiki bacarıqlar",
  "Komanda işi",
  "Problem həll etmə",
  "Liderlik və kommunikasiya"
 ]

 return(

  <section className="py-28 bg-linear-to-r from-[#003566] to-[#001D3D] text-white">

   <Container>

    <div className="grid md:grid-cols-2 gap-16 items-center">

     <div>
      <h2 className="text-3xl font-bold">
       Bacarıqlar
      </h2>
     </div>

     <ul className="space-y-4">

      {skills.map((skill,index)=>(
       <li key={index} className="text-lg opacity-90">
        ✔ {skill}
       </li>
      ))}

     </ul>

    </div>

   </Container>

  </section>

 )
}