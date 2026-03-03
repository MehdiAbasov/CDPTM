import PageHeader from "../components/layout/PageHeader"
import AboutIntro from "../components/about/AboutIntro"
import WhyUs from "../components/about/WhyUs"
import MissionVision from "../components/about/MissionVision"
import AboutStats from "../components/about/AboutStats"
import CTA from "../components/home/CTA"

export default function About(){

 return(
  <>
   <PageHeader
    title="about.title"
    subtitle="about.subtitle"
   />

   <AboutIntro/>
   <WhyUs/>
   <MissionVision/>
   <AboutStats/>
   <CTA/>
  </>
 )
}