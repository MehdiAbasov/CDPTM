export default function FileUpload({ onChange }) {

  return (

    <input
      type="file"
      accept="image/*"
      onChange={e => onChange(e.target.files[0])}
      className="
      w-full
      border
      border-gray-300
      rounded-md
      p-2
      "
    />

  );

}