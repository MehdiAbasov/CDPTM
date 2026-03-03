import Container from "../layout/Container"
import useFetch from "../../hooks/useFetch"
import { Link } from "react-router-dom"
export default function VacancySection() {

    const { data: vacancy, loading } = useFetch("/vacancies")

    if (loading) return null

    return (

        <section className="py-24 bg-white">

            <Container>

                <h2 className="text-3xl font-bold text-[#0B1F3F] mb-14">
                    Vakansiyalar
                </h2>

                <div className="grid md:grid-cols-2 gap-8">

                    {vacancy.map(item => (
                        <div
                            key={item._id}
                            className="p-8 border border-gray-200 rounded-xl hover:border-[#003566] hover:shadow-xl transition"
                        >

                            <h3 className="text-xl font-semibold text-[#0B1F3F]">
                                {item.title}
                            </h3>

                            <p className="text-gray-600 mt-4 line-clamp-3">
                                {item.description}
                            </p>
                            <Link to="/contact" className="p-2 text-blue-600">
                                Əlaqə Saxla
                            </Link>
                        </div>
                    ))}

                </div>

            </Container>

        </section>

    )
}