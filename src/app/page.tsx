import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-semibold">Total Users</h2>
          <p className="text-3xl font-bold">12,000</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-semibold">Active Users</h2>
          <p className="text-3xl font-bold">8,000</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-semibold">Total Streams</h2>
          <p className="text-3xl font-bold">50,000</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-semibold">Revenue</h2>
          <p className="text-3xl font-bold">$120,000</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold">
            User Growth (Last 12 Months)
          </h2>
          <div className="mt-4">{/* Line Chart Component */}</div>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold">Revenue Distribution</h2>
          <div className="mt-4">{/* Pie Chart Component */}</div>
        </div>
      </div>
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-semibold">Top 5 Streamed Songs</h2>
        <div className="mt-4">{/* Bar Chart Component */}</div>
      </div>
      <div className="bg-white shadow rounded-lg p-6 mt-8">
        <h2 className="text-lg font-semibold mb-4">Recent Streams</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Song Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Artist
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date Streamed
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Stream Count
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                User ID
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Song 1</td>
              <td className="px-6 py-4 whitespace-nowrap">Artist 1</td>
              <td className="px-6 py-4 whitespace-nowrap">2024-09-25</td>
              <td className="px-6 py-4 text-right whitespace-nowrap">10,000</td>
              <td className="px-6 py-4 text-right whitespace-nowrap">
                User123
              </td>
            </tr>
            {/* More rows here */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
