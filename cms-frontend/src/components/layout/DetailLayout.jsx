import { Link } from "react-router-dom"

export default function DetailLayout({ item, latest }) {

    return (

        <section className="container py-10">

            <div className="grid lg:grid-cols-4 gap-12">

                <div className="lg:col-span-3">

                    <img
                        src={item.coverImage}
                        className="w-full h-112.5 object-contain rounded-xl mb-10"
                    />
                    <p className="text-gray-500 mb-6">
                        {new Date(item.createdAt).toLocaleDateString()}
                    </p>

                    <h1 className="text-3xl font-bold text-[#0B1F3F] mb-8">
                        {item.title}
                    </h1>

                    <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {item.content}
                    </div>


                </div>


                <aside>

                    <div className="bg-gray-50 p-6 rounded-xl">

                        <h3 className="font-bold mb-4">

                            Latest News

                        </h3>

                        <div className="space-y-3">

                            {latest.map(n => (
                                <Link
                                    key={n._id}
                                    to={`/news/${n.slug}`}
                                    className="block text-sm hover:text-blue-600"
                                >
                                    {n.title}
                                </Link>
                            ))}

                        </div>

                    </div>

                </aside>

            </div>

        </section>

    )

}