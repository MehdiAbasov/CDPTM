import Container from "../layout/Container"
import SectionHeader from "../layout/SectionHeader"
import SocialCard from "../cards/SocialCard"
import { socials } from "../../data/social"

export default function SocialSection() {

    return (

        <section className="py-24  bg-[#003566]">

            <Container>
                <SectionHeader
                    color="white"
                    title="home.social.title"
                    subtitle="home.social.subtitle"
                />

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                    {socials.map(item => (
                        <SocialCard
                            key={item.id}
                            item={item}
                        />
                    ))}

                </div>

            </Container>

        </section>

    )
}