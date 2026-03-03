import { useEffect, useState } from "react";
import {
  getEvents,
  createEvent,
  deleteEvent
} from "../api/eventsApi";
import { toast } from "react-toastify";

export default function Events() {

  const [data, setData] = useState([]);

  const [title, setTitle] = useState({});

  const [content, setContent] = useState({});

  const [location, setLocation] = useState({});

  const [date, setDate] = useState("");

  const [image, setImage] = useState(null);

  const fetchData = async () => {
    const res = await getEvents();
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {

    e.preventDefault();

    const formData = new FormData();

    formData.append("title", JSON.stringify(title));
    formData.append("content", JSON.stringify(content));
    formData.append("location", JSON.stringify(location));

    formData.append("date", date);

    if (image) {
      formData.append("coverImage", image);
    }

    await createEvent(formData);
    toast.success("Event created!")
    fetchData();

  };

  const handleDelete = async (id) => {
    if (!confirm("delete item?")) return;
    await deleteEvent(id);
    toast.danger("deleted!")
    fetchData();
  };

  return (

    <div>

      <h1 className="text-2xl mb-6">Events</h1>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 gap-4 mb-10"
      >

        <input
          placeholder="Title AZ"
          onChange={e => setTitle(p => ({ ...p, az: e.target.value }))}
          className="border p-2"
        />

        <input
          placeholder="Title EN"
          onChange={e => setTitle(p => ({ ...p, en: e.target.value }))}
          className="border p-2"
        />

        <textarea
          placeholder="Content AZ"
          onChange={e => setContent(p => ({ ...p, az: e.target.value }))}
          className="border p-2"
        />

        <textarea
          placeholder="Content EN"
          onChange={e => setContent(p => ({ ...p, en: e.target.value }))}
          className="border p-2"
        />

        <input
          placeholder="Location AZ"
          onChange={e => setLocation(p => ({ ...p, az: e.target.value }))}
          className="border p-2"
        />

        <input
          placeholder="Location EN"
          onChange={e => setLocation(p => ({ ...p, en: e.target.value }))}
          className="border p-2"
        />

        <input
          type="date"
          onChange={e => setDate(e.target.value)}
          className="border p-2"
        />

        <input
          type="file"
          onChange={e => setImage(e.target.files[0])}
        />

        <button className="bg-blue-500 text-white p-2">
          Add Event
        </button>

      </form>

      {data.map(item => (
        <div key={item._id} className="flex justify-between border p-3 mb-2">

          <div className="font-semibold whitespace-nowrap overflow-hidden text-ellipsis max-w-[500px]">{item.title}</div>

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