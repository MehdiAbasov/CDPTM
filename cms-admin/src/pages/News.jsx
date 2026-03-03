import { useState, useEffect } from "react";

import MultilangInput
  from "../components/forms/MultilangInput";

import ImageInput
  from "../components/forms/ImageInput";

import buildFormData
  from "../utils/buildFormData";
import { toast } from "react-toastify";
import {
  getNews,
  createNews,
  deleteNews
} from "../api/newsApi";

export default function News() {

  const [data, setData] = useState([]);

  const [title, setTitle] = useState({});
  const [content, setContent] = useState({});
  const [coverImage, setCoverImage] = useState(null);

  const fetchData = async () => {
    const res = await getNews();
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {

    e.preventDefault();

    const formData = buildFormData({
      title,
      content,
      coverImage
    });

    await createNews(formData);
    toast.success("News created");
    fetchData();

  };

  const handleDelete = async (id) => {

    if (!confirm("Delete item?")) return;

    await deleteNews(id);

    toast.success("Deleted");

    fetchData();

  }

  return (

    <div>

      <h1 className="text-2xl mb-6">
        News
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 mb-10"
      >

        <MultilangInput
          label="Title"
          onChange={setTitle}
        />

        <MultilangInput
          label="Content"
          onChange={setContent}
        />

        <ImageInput
          onChange={setCoverImage}
        />

        <button className="bg-blue-500 text-white p-2">
          Add News
        </button>

      </form>

      {data.map(item => (
        <div
          key={item._id}
          className="flex justify-between border p-3 mb-2"
        >

          <div className="font-semibold">
            {item.title?.az}
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

  );

}