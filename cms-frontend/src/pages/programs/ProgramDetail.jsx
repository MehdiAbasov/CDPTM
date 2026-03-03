import { useParams } from "react-router-dom"
import { useEffect,useState } from "react"
import api from "../../api/axios"
import DetailLayout from "../../components/layout/DetailLayout"
import i18n from "../../i18n/i18n"

export default function ProgramDetail(){

 const {slug} = useParams()
 const [item,setItem] = useState(null)

 useEffect(()=>{

  const fetchData = async()=>{

   const lang = i18n.language || "az"

   const res = await api.get(`/programs/${slug}?lang=${lang}`)

   setItem(res.data)

  }

  fetchData()

 },[slug])

 if(!item) return <div className="container py-20">Loading...</div>

 return <DetailLayout item={item}/>

}