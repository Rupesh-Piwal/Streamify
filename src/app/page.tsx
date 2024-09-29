import BarChart from "@/components/chart/BarChart";
import LineChart from "@/components/chart/LineChart";
import PieChart from "@/components/chart/PieChart";
import Filter from "@/components/Filter";
import MetricsCard from "@/components/MetricsCard";
import DataTable from "@/components/Table/DataTable";
import { FaDollarSign, FaHeadphones, FaMusic, FaUsers } from "react-icons/fa";
import {
  mockUserGrowthData,
  mockRevenueData,
  mockTopSongsData,
} from "@/data/mockData";

export default function Home() {
  const totalStreams = 56780;
  const topArtist = "Taylor Swift";
  return (
    <div className="min-h-screen bg-[#0E1011] px-[10px] md:px-[100px]">
      {/* Header */}

      <div className="container mx-auto py-8">
        {/* Metrics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          <MetricsCard title="Total Users" value={4500} icon={<FaUsers />} />
          <MetricsCard
            title="Active Users"
            value={1200}
            icon={<FaHeadphones />}
          />
          <MetricsCard
            title="Total Streams"
            value={totalStreams}
            icon={<FaMusic />}
          />
          <MetricsCard
            title="Revenue"
            value="$24,000"
            icon={<FaDollarSign />}
          />
          <MetricsCard
            title="Top Artist"
            value={topArtist}
            icon={<FaMusic />}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* User Growth Line Chart */}
          <div className="bg-[#171819]  max-w-[500px] border border-[#161D26] shadow-md rounded-lg my-6 p-4">
            <h2 className=" text-slate-300 text-lg font-semibold mb-4">
              User Growth
            </h2>
            <LineChart data={mockUserGrowthData} />
          </div>

          {/* Revenue Distribution Pie Chart */}
          <div className="bg-[#171819] max-w-[500px] border border-[#161D26] shadow-md rounded-lg my-6 p-4">
            <h2 className="text-lg text-slate-300 font-semibold mb-4">
              Revenue Distribution
            </h2>
            <PieChart data={mockRevenueData} />
          </div>

          {/* Top 5 Streamed Songs Bar Chart */}
          <div className="bg-[#171819] max-w-[500px] border border-[#161D26] shadow-md rounded-lg my-6 p-4">
            <h2 className="text-lg text-slate-300 font-semibold mb-4">
              Top 5 Streamed Songs
            </h2>
            <BarChart data={mockTopSongsData} />
          </div>

          {/* Filter for Recent Streams */}
          <div className="bg-white shadow-md rounded-lg my-6 p-4">
            <h2 className="text-lg font-semibold mb-4">Recent Streams</h2>
            <Filter />
            <DataTable />
          </div>
        </div>
      </div>
    </div>
  );
}
