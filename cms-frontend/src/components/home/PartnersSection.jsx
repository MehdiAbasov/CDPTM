import Container from "../layout/Container"
import { partners } from "../../data/Partners"
import PartnerCard from "../cards/PartnerCard"
export default function PartnersSection() {

    return (

        <section className="py-20 overflow-hidden ">

            <Container>

                <div className="relative pt-5">

                    <div className="flex animate-partners whitespace-nowrap ">

                        {[...partners, ...partners].map((item, index) => (
                            <PartnerCard key={index} item={item} />
                        ))}

                    </div>

                </div>

            </Container>

        </section>

    )

}