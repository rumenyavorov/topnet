export function SidenavSkeleton() {
  return (
    <div className="animate-pulse flex h-full flex-col px-3 py-4 md:px-2 space-y-4">
      <div className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-200 p-4 md:h-40">
        <div className="space-y-2">
          {/* Placeholder for the TopnetLogo */}
          <div className="h-6 w-24 bg-blue-300 rounded"></div>
          {/* Placeholder for the "Здравей," and username */}
          <div className="h-4 w-16 bg-blue-300 rounded"></div>
          <div className="h-6 w-32 bg-blue-300 rounded"></div>
        </div>
      </div>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        {/* Placeholder for NavLinks */}
        <div className="h-4 w-full bg-gray-300 rounded-md"></div>
        <div className="h-4 w-full bg-gray-300 rounded-md md:hidden"></div>
        {/* Additional placeholders for other NavLinks or content */}
        <div className="hidden h-auto w-full grow rounded-md bg-gray-300 md:block"></div>
        {/* Placeholder for Logout */}
        <div className="h-4 w-full bg-gray-300 rounded-md"></div>
      </div>
    </div>
  );
}

export function TableSkeleton() {
  // Define how many skeleton rows you want to show
  const skeletonRows = 10;

  return (
    <div className="min-w-full bg-gray-100 rounded-lg">
      <div className="relative animate-pulse">
        <table className="w-full text-sm text-left text-gray-400">
          <thead className="text-xs uppercase bg-gray-200">
            <tr>
              <th scope="col" className="py-3 px-6">
                Име
              </th>
              <th scope="col" className="py-3 px-6">
                Фамилия
              </th>
              <th scope="col" className="py-3 px-6">
                Адрес
              </th>
              <th scope="col" className="py-3 px-6">
                План
              </th>
              <th scope="col" className="py-3 px-6">
                Описание
              </th>
              <th scope="col" className="py-3 px-6">
                Дата на създаване
              </th>
              <th scope="col" className="py-3 px-6">
                Действия
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: skeletonRows }).map((_, index) => (
              <tr key={index} className="bg-white border-b">
                <td className="py-4 px-6">
                  <div className="h-2 bg-gray-300 rounded"></div>
                </td>
                <td className="py-4 px-6">
                  <div className="h-2 bg-gray-300 rounded"></div>
                </td>
                <td className="py-4 px-6">
                  <div className="h-2 bg-gray-300 rounded"></div>
                </td>
                <td className="py-4 px-6">
                  <div className="h-2 bg-gray-300 rounded"></div>
                </td>
                <td className="py-4 px-6">
                  <div className="h-2 bg-gray-300 rounded"></div>
                </td>
                <td className="py-4 px-6">
                  <div className="h-2 bg-gray-300 rounded"></div>
                </td>
                <td className="py-4 px-6">
                  <div className="h-2 bg-gray-300 rounded"></div>
                </td>
                <td className="py-4 px-6">
                  <div className="h-2 bg-gray-300 rounded"></div>
                </td>
                <td className="py-4 px-6">
                  <div className="flex space-x-4">
                    <div className="h-4 w-4 bg-gray-300 rounded"></div>
                    <div className="h-4 w-4 bg-gray-300 rounded"></div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


export function GreetingSkeleton() {
  return (
    <div className="flex flex-col">
      <h3 className="text-gray-400 font-semibold">Здравей,</h3>
      <div className="animate-pulse rounded bg-gray-300 h-6 w-32"></div>
    </div>

  );
}