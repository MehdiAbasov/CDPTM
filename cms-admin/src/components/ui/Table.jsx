export default function Table({
  columns,
  children
}) {

  return (
    <div className="bg-white rounded-lg shadow">

      <table className="w-full">

        <thead className="border-b">

          <tr>

            {columns.map(col => (

              <th
                key={col}
                className="
                text-left
                text-sm
                font-medium
                text-gray-500
                p-4
                "
              >
                {col}
              </th>

            ))}

          </tr>

        </thead>

        <tbody>
          {children}
        </tbody>

      </table>

    </div>
  );

}