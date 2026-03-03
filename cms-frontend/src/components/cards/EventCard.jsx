import { Link } from "react-router-dom"

export default function EventCard({ item }) {

    if (!item) return null

    const date = new Date(item.createdAt).toLocaleDateString("az-AZ", {
        day: "2-digit",
        month: "numeric",
        year: "numeric"
    })

    return (

        <Link
            to={`/events/${item._id}`}
            className="group block overflow-hidden  transition"
        >

            <div className="h-72 overflow-hidden">

                <img
                    src={item.coverImage}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />

            </div>

            <div className="p-5">

                <p className="text-md text-gray-500 mb-5">
                    {date}
                </p>

                <h3 className="text-xl font-bold text-[#0B1F3F] group-hover:text-[#003566]">
                    {item.title}
                </h3>

            </div>

        </Link>

    )
}