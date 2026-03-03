import { useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import PageHeader from "../../components/layout/PageHeader"
import { useTranslation } from "react-i18next"

export default function EventDetail() {

    const { slug } = useParams()
    const { t } = useTranslation()

    const { data: event, loading } = useFetch(`/events/${slug}`)
    const { data: latest = [] } = useFetch("/events")

    if (loading || !event) return null

    return (
        <>
            <PageHeader
                title="events.title"
                subtitle="events.subtitle"
            />

            <section className="py-24 bg-white">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid lg:grid-cols-4 gap-16">

                        {/* LEFT CONTENT */}

                        <div className="lg:col-span-3">

                            <img
                                src={event.coverImage}
                                alt={event.title}
                                className="rounded-xl w-full h-112.5 object-contain mb-10"
                            />

                            <p className="text-gray-500 mb-6">
                                {new Date(event.createdAt).toLocaleDateString()}
                            </p>

                            <h1 className="text-3xl font-bold text-[#0B1F3F] mb-8">
                                {event.title}
                            </h1>

                            <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                                {event.content}
                            </div>

                        </div>

                        {/* SIDEBAR */}

                        <div className="lg:col-span-1">

                            <div className="border border-gray-200 rounded-xl p-6">

                                <h3 className="font-semibold mb-6 text-[#0B1F3F]">
                                    {t("events.other")}
                                </h3>

                                <div className="space-y-4">

                                    {latest
                                        .filter(e => e.slug !== slug)
                                        .slice(0, 4)
                                        .map(item => (
                                            <a
                                                key={item._id}
                                                href={`/events/${item.slug}`}
                                                className="block text-sm text-gray-600 hover:text-[#003566] transition"
                                            >
                                                {item.title}
                                            </a>
                                        ))}

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}