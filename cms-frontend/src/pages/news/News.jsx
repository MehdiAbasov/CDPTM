import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import api from "../../api/axios"
import { useTranslation } from "react-i18next"
import PageHeader from "../../components/layout/PageHeader"
export default function News() {

    const { i18n } = useTranslation()

    const [news, setNews] = useState([])

    const lang = i18n.language || "az"

    useEffect(() => {

        const fetchNews = async () => {

            const res = await api.get(`/news?lang=${lang}`)
            setNews(res.data)

        }

        fetchNews()

    }, [lang])

    return (
        <section>
            <PageHeader
                title="news.title"
                subtitle="news.subtitle"
            />
            <div className="container py-10">

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">

                    {news.map(item => (

                        <Link key={item._id} to={`/news/${item.slug}`}>

                            <img
                                src={item.coverImage}
                                className="w-full h-72 object-cover"
                            />

                            <h3 className="font-bold mt-3">

                                {item.title}

                            </h3>

                        </Link>

                    ))}

                </div>

            </div>
        </section>
    )
}