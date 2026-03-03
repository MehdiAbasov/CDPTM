import { useState } from "react";

export default function MultilangInput({
  label,
  onChange
}){

  const [az,setAz] = useState("");
  const [en,setEn] = useState("");

  const handleChange = (lang,value)=>{

    if(lang === "az"){
      setAz(value);
      onChange({az:value,en});
    }

    if(lang === "en"){
      setEn(value);
      onChange({az,en:value});
    }

  };

  return(

    <div className="flex flex-col gap-2">

      <label className="font-semibold">
        {label}
      </label>

      <input
        placeholder={`${label} AZ`}
        className="border p-2"
        value={az}
        onChange={(e)=>
          handleChange("az",e.target.value)
        }
      />

      <input
        placeholder={`${label} EN`}
        className="border p-2"
        value={en}
        onChange={(e)=>
          handleChange("en",e.target.value)
        }
      />

    </div>

  );

}