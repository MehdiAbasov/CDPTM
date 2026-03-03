import Container from "../layout/Container"
import { partners } from "../../data/Partners"

export default function CompanyNetwork() {

    return (

        <section className="py-24 bg-gray-50">

            <Container>

                <h2 className="text-3xl font-bold text-[#0B1F3F] mb-14">
                    Şirkətlər Şəbəkəsi
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

                    {partners.map(item => (
                        <div
                            key={item.id}
                            className="flex items-center justify-center p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition"
                        >
                            <img
                                src={item.logo}
                                alt={item.name}
                                className="h-12 object-contain"
                            />
                        </div>
                    ))}

                </div>

            </Container>

        </section>

    )
}