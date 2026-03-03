import { useEffect,useState } from "react"

function Counter({target}){

 const [count,setCount] = useState(0)

 useEffect(()=>{

  let start = 0

  const duration = 1500

  const step = Math.ceil(target / (duration / 15))

  const timer = setInterval(()=>{

   start += step

   if(start >= target){

    start = target
    clearInterval(timer)

   }

   setCount(start)

  },16)

 },[target])

 return count

}

export default function StatsSection(){

 return(

  <section className="bg-[#003566] text-white py-20">

   <div className="container grid md:grid-cols-4 text-center gap-10">

    <div>

     <h3 className="text-4xl font-bold">
      <Counter target={500}/>+
     </h3>

     <p>Students</p>

    </div>

    <div>

     <h3 className="text-4xl font-bold">
      <Counter target={20}/>+
     </h3>

     <p>Programs</p>

    </div>

    <div>

     <h3 className="text-4xl font-bold">
      <Counter target={30}/>+
     </h3>

     <p>Partners</p>

    </div>

    <div>

     <h3 className="text-4xl font-bold">
      <Counter target={10}/>+
     </h3>

     <p>Years Experience</p>

    </div>

   </div>

  </section>

 )

}