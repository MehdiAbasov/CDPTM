import { useEffect, useState } from "react";
import {
    getGallery,
    uploadImage,
    deleteImage
} from "../api/galleryApi";

export default function Gallery() {

    const [data, setData] = useState([]);

    const [image, setImage] = useState(null);

    const fetchData = async () => {
        const res = await getGallery()
        setData(res.data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleUpload = async (e) => {

        e.preventDefault()

        const formData = new FormData()

        formData.append("image", image)

        await uploadImage(formData)
        
        fetchData()

    }
    const handleDelete = async (id) => {

        if (!confirm("Delete image?")) return;

        await deleteImage(id);

        fetchData();

    };
    return (

        <div>

            <h1 className="text-2xl mb-6">
                Gallery
            </h1>

            <form onSubmit={handleUpload}>

                <input
                    type="file"
                    onChange={e => setImage(e.target.files[0])}
                />

                <button className="bg-green-600 p-2 px-4 text-white cursor-pointer">
                    Upload
                </button>

            </form>

            <div className="grid grid-cols-4 gap-4">

                {data.length === 0 && (
                    <p>No images</p>
                )}

                {data.map(item => (

                    <div
                        key={item._id}
                        className="border rounded overflow-hidden"
                    >

                        <img
                            src={item.image}
                            alt="gallery"
                            className="w-full h-40 object-cover"
                        />

                        <button
                            onClick={() => handleDelete(item._id)}
                            className="bg-red-500 hover:bg-red-600 text-white w-full py-1"
                        >
                            Delete
                        </button>

                    </div>

                ))}

            </div>

        </div>

    )

}