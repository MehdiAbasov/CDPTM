export default function PageHeader({
  title,
  action
}) {

  return (
    <div className="
    flex
    justify-between
    items-center
    mb-6
    ">

      <h1 className="
      text-2xl
      font-semibold
      ">
        {title}
      </h1>

      {action}

    </div>
  );

}