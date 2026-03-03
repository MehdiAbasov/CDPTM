import { useState, useEffect } from "react";
import {
  getVacancies,
  createVacancy,
  deleteVacancy
} from "../api/vacanciesApi";
import { toast } from "react-toastify";

export default function Vacancies() {

  const [data, setData] = useState([]);

  const [titleAz, setTitleAz] = useState("");
  const [titleEn, setTitleEn] = useState("");

  const [descriptionAz, setDescriptionAz] = useState("");
  const [descriptionEn, setDescriptionEn] = useState("");

  const [deadline, setDeadline] = useState("");

  const fetchData = async () => {
    const res = await getVacancies();
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!titleAz || !titleEn) {
      alert("Title required");
      return;
    }

    if (!descriptionAz || !descriptionEn) {
      alert("Description required");
      return;
    }




    await createVacancy({
      title: {
        az: titleAz,
        en: titleEn
      },

      description: {
        az: descriptionAz,
        en: descriptionEn
      },

      deadline
    });
    toast.success("Vacancy Created!")
    setTitleAz("");
    setTitleEn("");
    setDescriptionAz("");
    setDescriptionEn("");
    setDeadline("");

    fetchData();

  };

  const handleDelete = async (id) => {
    if (!confirm("delete item?")) return;
    await deleteVacancy(id);
    toast.success("deleted")
    fetchData();

  };

  return (

    <div>

      <h1 className="text-2xl mb-6">
        Vacancies
      </h1>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 gap-4 mb-10"
      >

        <input
          value={titleAz}
          placeholder="Title AZ"
          onChange={e => setTitleAz(e.target.value)}
          className="border p-2"
        />

        <input
          value={titleEn}
          placeholder="Title EN"
          onChange={e => setTitleEn(e.target.value)}
          className="border p-2"
        />

        <textarea
          value={descriptionAz}
          placeholder="Description AZ"
          onChange={e => setDescriptionAz(e.target.value)}
          className="border p-2"
        />

        <textarea
          value={descriptionEn}
          placeholder="Description EN"
          onChange={e => setDescriptionEn(e.target.value)}
          className="border p-2"
        />

        <input
          type="date"
          value={deadline}
          onChange={e => setDeadline(e.target.value)}
          className="border p-2"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white p-2"
        >
          Add Vacancy
        </button>

      </form>

      {data.map(item => (
        <div
          key={item._id}
          className="flex justify-between border p-3 mb-2"
        >

          <div>
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