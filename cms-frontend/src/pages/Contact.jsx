import PageHeader from "../components/layout/PageHeader"
import { useTranslation } from "react-i18next"
import { useState } from "react"
import api from "../api/axios"

export default function Contact() {

    const { t } = useTranslation()

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    })

    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            setLoading(true)

            await api.post("/contact", form)

            alert("Message sent successfully")

            setForm({
                name: "",
                email: "",
                message: ""
            })

        } catch (err) {
            alert("Error sending message")
        }

        setLoading(false)
    }

    return (
        <>
            <PageHeader
                title="contact.title"
                subtitle="contact.subtitle"
            />

            <section className="py-24 bg-white">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid lg:grid-cols-2 gap-20">

                        {/* LEFT */}

                        <div>
                            <h2 className="text-3xl font-bold text-[#0B1F3F] mb-10">
                                {t("contact.infoTitle")}
                            </h2>

                            <div className="space-y-8 text-lg text-gray-600">
                                <div>
                                    <p className="font-semibold text-[#003566]">📍 {t("contact.addressTitle")}</p>
                                    <p className="mt-2">Cəlilabad R, Göytəpə Ş.  Azərbaycan</p>
                                </div>

                                <div>
                                    <p className="font-semibold text-[#003566]">📞 {t("contact.phoneTitle")}</p>
                                    <p className="mt-2">+994 00 000 00 00</p>
                                </div>

                                <div>
                                    <p className="font-semibold text-[#003566]">✉ {t("contact.emailTitle")}</p>
                                    <p className="mt-2">cdptm@cdptm.edu.az</p>
                                </div>
                            </div>
                        </div>

                        {/* FORM */}

                        <form
                            onSubmit={handleSubmit}
                            className="bg-gray-50 p-10 rounded-xl border border-gray-200 shadow-lg space-y-6"
                        >

                            <h3 className="text-2xl font-semibold text-[#0B1F3F] mb-6">
                                {t("contact.formTitle")}
                            </h3>

                            <input
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                type="text"
                                placeholder={t("contact.name")}
                                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#003566]"
                                required
                            />

                            <input
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                type="email"
                                placeholder={t("contact.email")}
                                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#003566]"
                                required
                            />

                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                rows="5"
                                placeholder={t("contact.message")}
                                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#003566]"
                                required
                            ></textarea>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-3 bg-[#003566] text-white font-semibold rounded-lg hover:bg-[#001D3D] transition"
                            >
                                {loading ? "Sending..." : t("contact.send")}
                            </button>

                        </form>

                    </div>

                </div>

            </section>

            {/* MAP */}

            <section className="h-112.5">
                <iframe
                    src="https://www.google.com/maps?cid=3157320862887749911&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                ></iframe>
            </section>
        </>
    )
}