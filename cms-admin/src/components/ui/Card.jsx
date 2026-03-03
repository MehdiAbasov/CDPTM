export default function Card({ title, value }) {

  return (

    <div className="
    bg-white
    rounded-xl
    shadow
    p-6
    flex
    flex-col
    gap-2
    ">

      <span className="text-gray-500 text-sm">
        {title}
      </span>

      <span className="text-2xl font-bold">
        {value}
      </span>

    </div>

  );

}