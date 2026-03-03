import { useEffect, useState } from "react"
import { getPrograms, createProgram, deleteProgram } from "../api/programsApi"
import { toast } from "react-toastify"

export default function Programs() {

    const [data, setData] = useState([])

    const [name, setName] = useState({ az: "", en: "" })
    const [description, setDescription] = useState({ az: "", en: "" })
    const [duration, setDuration] = useState({ az: "", en: "" })
    const [price, setPrice] = useState("")
    const [icon, setIcon] = useState(null)

    const fetchData = async () => {

        try {

            const res = await getPrograms()

            setData(res.data || [])

        } catch (err) {

            console.error(err)
            toast.error("Programs load error")

        }

    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleSubmit = async (e) => {

        e.preventDefault()

        try {

            const formData = new FormData()

            formData.append("name", JSON.stringify(name))
            formData.append("description", JSON.stringify(description))
            formData.append("duration", JSON.stringify(duration))
            formData.append("price", price)

            if (icon) {
                formData.append("icon", icon)
            }

            await createProgram(formData)

            toast.success("Program created")

            setName({ az: "", en: "" })
            setDescription({ az: "", en: "" })
            setDuration({ az: "", en: "" })
            setPrice("")
            setIcon(null)

            fetchData()

        } catch (err) {

            console.error(err)
            toast.error("Create failed")

        }

    }

    const handleDelete = async (id) => {

        if (!window.confirm("Delete this program?")) return

        try {

            await deleteProgram(id)

            toast.success("Program deleted")

            fetchData()

        } catch (err) {

            console.error(err)
            toast.error("Delete failed")

        }

    }

    return (

        <div className="p-6">

            <h1 className="text-2xl font-semibold mb-6">
                Programs
            </h1>

            <form
                onSubmit={handleSubmit}
                className="grid grid-cols-2 gap-4 mb-10"
            >

                <input
                    placeholder="Name AZ"
                    value={name.az}
                    onChange={e => setName(p => ({ ...p, az: e.target.value }))}
                    className="border p-2 rounded"
                />

                <input
                    placeholder="Name EN"
                    value={name.en}
                    onChange={e => setName(p => ({ ...p, en: e.target.value }))}
                    className="border p-2 rounded"
                />

                <textarea
                    placeholder="Description AZ"
                    value={description.az}
                    onChange={e => setDescription(p => ({ ...p, az: e.target.value }))}
                    className="border p-2 rounded"
                />

                <textarea
                    placeholder="Description EN"
                    value={description.en}
                    onChange={e => setDescription(p => ({ ...p, en: e.target.value }))}
                    className="border p-2 rounded"
                />


                <button className="bg-blue-600 text-white p-2 rounded col-span-2">
                    Add Program
                </button>

            </form>

            <div className="space-y-2">

                {data.map(item => (

                    <div
                        key={item._id}
                        className="flex justify-between items-center border p-3 rounded"
                    >

                        <div>

                            <div className="font-medium">
                                {item.name}
                            </div>

                        </div>

                        <button
                            onClick={() => handleDelete(item._id)}
                            className="text-red-500"
                        >
                            Delete
                        </button>

                    </div>

                ))}

            </div>

        </div>

    )
}