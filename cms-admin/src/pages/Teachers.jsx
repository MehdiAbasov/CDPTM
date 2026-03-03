import { useEffect, useState } from "react";
import {
  getTeachers,
  createTeacher,
  deleteTeacher
} from "../api/teacherApi";

export default function Teachers(){

  const [data,setData] = useState([]);

  const [nameAz,setNameAz] = useState("");
  const [nameEn,setNameEn] = useState("");

  const [positionAz,setPositionAz] = useState("");
  const [positionEn,setPositionEn] = useState("");

  const [bioAz,setBioAz] = useState("");
  const [bioEn,setBioEn] = useState("");

  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [order,setOrder] = useState("");

  const [photo,setPhoto] = useState(null);

  const fetchData = async ()=>{
    const res = await getTeachers();
    setData(res.data);
  };

  useEffect(()=>{
    fetchData();
  },[]);

  const handleSubmit = async(e)=>{

    e.preventDefault();

    const formData = new FormData();

    formData.append(
      "name",
      JSON.stringify({
        az:nameAz,
        en:nameEn
      })
    );

    formData.append(
      "position",
      JSON.stringify({
        az:positionAz,
        en:positionEn
      })
    );

    formData.append(
      "bio",
      JSON.stringify({
        az:bioAz,
        en:bioEn
      })
    );

    formData.append("email",email);
    formData.append("phone",phone);
    formData.append("order",order);

    if(photo){
      formData.append("photo",photo);
    }

    await createTeacher(formData);

    fetchData();

  };

  const handleDelete = async(id)=>{
    await deleteTeacher(id);
    fetchData();
  };

  return(

    <div>

      <h1 className="text-2xl mb-6">
        Teachers
      </h1>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 gap-4 mb-8"
      >

        <input
          placeholder="Name AZ"
          onChange={(e)=>setNameAz(e.target.value)}
          className="border p-2"
        />

        <input
          placeholder="Name EN"
          onChange={(e)=>setNameEn(e.target.value)}
          className="border p-2"
        />

        <input
          placeholder="Position AZ"
          onChange={(e)=>setPositionAz(e.target.value)}
          className="border p-2"
        />

        <input
          placeholder="Position EN"
          onChange={(e)=>setPositionEn(e.target.value)}
          className="border p-2"
        />

        <textarea
          placeholder="Bio AZ"
          onChange={(e)=>setBioAz(e.target.value)}
          className="border p-2"
        />

        <textarea
          placeholder="Bio EN"
          onChange={(e)=>setBioEn(e.target.value)}
          className="border p-2"
        />

        <input
          placeholder="Email"
          onChange={(e)=>setEmail(e.target.value)}
          className="border p-2"
        />

        <input
          placeholder="Phone"
          onChange={(e)=>setPhone(e.target.value)}
          className="border p-2"
        />

        <input
          placeholder="Order"
          onChange={(e)=>setOrder(e.target.value)}
          className="border p-2"
        />

        <input
          type="file"
          onChange={(e)=>setPhoto(e.target.files[0])}
        />

        <button className="bg-blue-500 text-white p-2">
          Add Teacher
        </button>

      </form>

      <div>

        {data.map(item=>(
          <div
            key={item._id}
            className="flex justify-between border p-3 mb-2"
          >

            <div>
              {item.name?.az}
            </div>

            <button
              onClick={()=>handleDelete(item._id)}
              className="text-red-500"
            >
              Delete
            </button>

          </div>
        ))}

      </div>

    </div>

  );

}