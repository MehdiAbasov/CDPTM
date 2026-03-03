import PageHeader from "../components/layout/PageHeader"
import EducationSection from "../components/academic/EducationSection"
import SpecialitiesSection from "../components/academic/SpecialitySection"
import AdmissionSection from "../components/academic/AdmissionSection"

export default function Academic(){

 return(
  <>
   <PageHeader
    title="academic.title"
    subtitle="academic.subtitle"
   />

   <EducationSection/>
   <SpecialitiesSection/>
   <AdmissionSection/>
  </>
 )
}