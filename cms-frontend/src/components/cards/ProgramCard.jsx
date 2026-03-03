import { Link } from "react-router-dom"

export default function ProgramCard({ item }) {

    if (!item) return null

    return (

        <Link
            to={`/academic`}
            className="group block h-full p-10 py-15 bg-linear-to-r from-[#0a4b8f] to-[#003566] hover:scale-102 transition"
        >

            <h3 className="text-3xl font-semibold text-white transition">

                {item.name}

            </h3>

            <p className="text-gray-100 mt-4 text-lg leading-relaxed line-clamp-4">

                {item.description}

            </p>

        </Link>

    )
}