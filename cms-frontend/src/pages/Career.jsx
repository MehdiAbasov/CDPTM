import PageHeader from "../components/layout/PageHeader"
import CareerIntro from "../components/career/CareerIntro"
import CompanyNetwork from "../components/career/CompanyNetwork.jsx"
import VacancySection from "../components/career/VacancySection"
import SkillsSection from "../components/career/SkillsSection"
import CTA from "../components/home/CTA"

export default function Career() {

    return (
        <>
            <PageHeader
                title="career.title"
                subtitle="career.subtitle"
            />

            <CareerIntro />
            <VacancySection />
            <CompanyNetwork />
            <SkillsSection />
        </>
    )
}