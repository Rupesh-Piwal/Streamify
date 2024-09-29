export const mockStreams = [
  {
    songName: "Song A",
    artist: "Artist 1",
    dateStreamed: "2023-09-01",
    streamCount: 1500,
    userId: "user123",
  },
  {
    songName: "Song B",
    artist: "Artist 2",
    dateStreamed: "2023-09-02",
    streamCount: 1200,
    userId: "user456",
  },
  {
    songName: "Song C",
    artist: "Artist 3",
    dateStreamed: "2023-09-03",
    streamCount: 1800,
    userId: "user789",
  },
  // Add more mock data as needed
];

export const mockUserGrowthData = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
  ],
  datasets: [
    {
      label: "Total Users",
      data: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      borderColor: "#4A90E2",
      fill: false,
    },
    {
      label: "Active Users",
      data: [50, 100, 150, 200, 250, 300, 350, 400, 450],
      borderColor: "#50E3C2",
      fill: false,
    },
  ],
};

export const mockRevenueData = {
  labels: ["Subscriptions", "Ads"],
  datasets: [
    {
      label: "Revenue",
      data: [65, 35],
      backgroundColor: ["#4A90E2", "#50E3C2"],
    },
  ],
};

export const mockTopSongsData = {
  labels: ["Song A", "Song B", "Song C", "Song D"],
};
