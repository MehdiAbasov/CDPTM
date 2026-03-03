import Container from "../layout/Container"
import SectionHeader from "../layout/SectionHeader"
import useFetch from "../../hooks/useFetch"
import NewsCard from "../cards/NewsCard"
import { useTranslation } from "react-i18next"

export default function FuturedNews() {

    const { data: news, loading } = useFetch("/news")
    if (loading) return null

    const items = news.slice(0, 4)
    return (

        <section className="py-2 mt-15 mb-15">

            <Container>

                <SectionHeader
                    title="home.news.title"
                    subtitle="home.news.subtitle"
                    link="/news"
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {items.map(item => (
                        <NewsCard key={item._id} item={item} />
                    ))}

                </div>

            </Container>

        </section>

    )
}