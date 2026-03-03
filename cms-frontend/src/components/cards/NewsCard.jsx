import { Link } from "react-router-dom"

export default function NewsCard({ item }) {

    return (

        <Link
            to={`/news/${item.slug}`}
            className="group block bg-white overflow-hidden  transition"
        >

            <img
                src={item.coverImage}
                className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
            />

            <div className="p-2">

                <p className="text-[16px] text-gray-400 py-3">

                    {new Date(item.createdAt).toLocaleDateString()}

                </p>

                <h3 className="font-bold text-xl text-[#0c244b]">

                    {item.title}

                </h3>

            </div>

        </Link>

    )
}