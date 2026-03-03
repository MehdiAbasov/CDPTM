import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import api from "../../api/axios"
import DetailLayout from "../../components/layout/DetailLayout"
import { useTranslation } from "react-i18next"
import PageHeader from "../../components/layout/PageHeader"

export default function NewsDetail() {

    const { slug } = useParams()

    const { i18n } = useTranslation()

    const [item, setItem] = useState(null)
    const [latest, setLatest] = useState([])

    const lang = i18n.language || "az"

    useEffect(() => {

        const fetchData = async () => {

            const detail = await api.get(`/news/${slug}?lang=${lang}`)
            const list = await api.get(`/news?lang=${lang}`)

            setItem(detail.data)
            setLatest(list.data.slice(0, 5))

        }

        fetchData()

    }, [slug, lang])

    if (!item) return <div className="container py-20">Loading...</div>

    return (
        <>
            <PageHeader
                title="news.title"
                subtitle="news.subtitle"
            />
            <DetailLayout item={item} latest={latest} />
        </>
    )
}