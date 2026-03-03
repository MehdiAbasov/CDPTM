import Container from "../layout/Container"
import SectionHeader from "../layout/SectionHeader"
import EventCard from "../cards/EventCard"
import useFetch from "../../hooks/useFetch"

export default function EventsSection() {

    const { data: events, loading } = useFetch("/events")

    if (loading || events.length === 0) return null

    const items = events.slice(0, 4)

    return (

        <section className="py-24">

            <Container>

                <SectionHeader
                    title="home.events.title"
                    subtitle="home.events.subtitle"
                    link="/events"
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {items.map(item => (

                        <EventCard
                            key={item._id}
                            item={item}
                        />

                    ))}

                </div>

            </Container>

        </section>

    )
}