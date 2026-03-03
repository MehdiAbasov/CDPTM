import PageHeader from "../../components/layout/PageHeader"
import { useTranslation } from "react-i18next"
import useFetch from "../../hooks/useFetch"
import { Link } from "react-router-dom"

export default function Events() {

    const { t } = useTranslation()
    const { data: events = [], loading } = useFetch("/events")

    if (loading) return null

    return (
        <>
            <PageHeader
                title="events.title"
                subtitle="events.subtitle"
            />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

                        {events.map(item => (
                            <Link
                                key={item._id}
                                to={`/events/${item.slug}`}
                                className="group border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition"
                            >

                                <div className="h-60 overflow-hidden">
                                    <img
                                        src={item.coverImage}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                                    />
                                </div>

                                <div className="p-6">

                                    <p className="text-sm text-gray-500 mb-3">
                                        {new Date(item.createdAt).toLocaleDateString()}
                                    </p>

                                    <h3 className="text-lg font-semibold text-[#0B1F3F] group-hover:text-[#003566] transition">
                                        {item.title}
                                    </h3>

                                </div>

                            </Link>
                        ))}

                    </div>

                </div>
            </section>
        </>
    )
}