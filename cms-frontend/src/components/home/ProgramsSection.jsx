import Container from "../layout/Container"
import SectionHeader from "../layout/SectionHeader"
import ProgramCard from "../cards/ProgramCard"
import useFetch from "../../hooks/useFetch"

export default function ProgramsSection() {

    const { data: programs, loading } = useFetch("/programs")

    if (loading || programs.length === 0) return null

    const items = programs.slice(0, 6)

    return (

        <section className="py-24">

            <Container>

                <SectionHeader
                    title="home.programs.title"
                    subtitle="home.programs.subtitle"
                    link="/academic"
                />

                <div className="grid md:grid-cols-3 gap-5">

                    {/* row 1 */}

                    <div className="md:col-span-2 ">
                        <ProgramCard item={items[0]} />
                    </div>

                    <div className="md:col-span-1 ">
                        <ProgramCard item={items[1]} />
                    </div>

                    {/* row 2 */}

                    <div className="md:col-span-1">
                        <ProgramCard item={items[2]} />
                    </div>

                    <div className="md:col-span-2 max-lg:col-span-1">
                        <ProgramCard item={items[3]} />
                    </div>
                    <div className="md:col-span-2 max-lg:hidden">
                        <ProgramCard item={items[4]} />
                    </div>

                    <div className="md:col-span-1 max-lg:hidden">
                        <ProgramCard item={items[5]} />
                    </div>

                </div>

            </Container>

        </section>

    )
}