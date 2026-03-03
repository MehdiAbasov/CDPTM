import { useState } from "react";
import { login } from "../api/authApi";
import { useNavigate } from "react-router-dom";

export default function Login(){

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async(e)=>{

    e.preventDefault();

    const res = await login({
      email,
      password
    });

    localStorage.setItem(
      "token",
      res.data.token
    );

    navigate("/");

  };

  return(

    <div className="h-screen flex items-center justify-center">

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow p-6 w-80 flex flex-col gap-4"
      >

        <h1 className="text-xl font-semibold">
          Admin Login
        </h1>

        <input
          placeholder="Email"
          onChange={(e)=>setEmail(e.target.value)}
          className="border p-2"
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e)=>setPassword(e.target.value)}
          className="border p-2"
        />

        <button
          className="bg-blue-500 text-white p-2"
        >
          Login
        </button>

      </form>

    </div>

  );

}