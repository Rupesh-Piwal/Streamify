// mockData.ts

export const mockUserGrowthData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Total Users",
      data: [
        3000, 3200, 3400, 3600, 4000, 4200, 4500, 4800, 5000, 5300, 5600, 6000,
      ],
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
    },
    {
      label: "Active Users",
      data: [
        1200, 1300, 1400, 1450, 1500, 1550, 1600, 1650, 1700, 1750, 1800, 1900,
      ],
      borderColor: "rgba(255, 99, 132, 1)",
      backgroundColor: "rgba(255, 99, 132, 0.2)",
    },
  ],
};

export const mockRevenueData = {
  labels: ["Subscriptions", "Ads"],
  datasets: [
    {
      label: "Revenue Sources",
      data: [18000, 6000],
      backgroundColor: ["rgba(54, 162, 235, 0.6)", "rgba(255, 206, 86, 0.6)"],
    },
  ],
};

export const mockTopSongsData = {
  labels: ["Song A", "Song B", "Song C", "Song D", "Song E"],
  datasets: [
    {
      label: "Stream Count",
      data: [4500, 4200, 4000, 3900, 3700],
      backgroundColor: "rgba(153, 102, 255, 0.6)",
    },
  ],
};
