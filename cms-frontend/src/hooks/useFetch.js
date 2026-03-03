import { useEffect, useState } from "react"
import api from "../api/axios"
import { useTranslation } from "react-i18next"

export default function useFetch(endpoint){

 const { i18n } = useTranslation()

 const [data,setData] = useState([])
 const [loading,setLoading] = useState(true)

 const lang = i18n.language

 useEffect(()=>{

  const fetchData = async()=>{

   try{

    const res = await api.get(endpoint,{
     params:{ lang }
    })

    setData(res.data)

   }catch(err){
    console.error(err)
   }

   setLoading(false)

  }

  fetchData()

 },[endpoint,lang])

 return {data,loading}

}