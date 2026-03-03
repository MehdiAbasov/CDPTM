import { useEffect,useState } from "react";
import api from "../api/axios";

export default function Dashboard(){

 const [stats,setStats] = useState({
  news:0,
  events:0,
  programs:0,
  vacancies:0,
  gallery:0
 });

 const fetchStats = async()=>{

  const [
   news,
   events,
   programs,
   vacancies,
   gallery
  ] = await Promise.all([

   api.get("/news"),
   api.get("/events"),
   api.get("/programs"),
   api.get("/vacancies"),
   api.get("/gallery")

  ]);

  setStats({

   news: news.data.length,
   events: events.data.length,
   programs: programs.data.length,
   vacancies: vacancies.data.length,
   gallery: gallery.data.length

  });

 };

 useEffect(()=>{
  fetchStats()
 },[])

 return(

  <div>

   <h1 className="text-3xl mb-6">
    Dashboard
   </h1>

   <div className="grid grid-cols-5 gap-4">

    <div className="bg-white p-4 shadow">
     News: {stats.news}
    </div>

    <div className="bg-white p-4 shadow">
     Events: {stats.events}
    </div>

    <div className="bg-white p-4 shadow">
     Programs: {stats.programs}
    </div>

    <div className="bg-white p-4 shadow">
     Vacancies: {stats.vacancies}
    </div>

    <div className="bg-white p-4 shadow">
     Gallery: {stats.gallery}
    </div>

   </div>

  </div>

 )

}