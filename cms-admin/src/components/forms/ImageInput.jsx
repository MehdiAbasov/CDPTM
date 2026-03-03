export default function ImageInput({onChange}){

  return(

    <input
      type="file"
      onChange={(e)=>
        onChange(e.target.files[0])
      }
    />

  );

}