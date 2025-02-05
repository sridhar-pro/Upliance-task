import { useState, useEffect } from "react";
import { Box, Typography, Paper, Grid, Card, CardContent } from "@mui/material";
import { Bar, Pie, Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement } from "chart.js";

// Register chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [userData, setUserData] = useState([]);
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    const savedData = localStorage.getItem("userData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setUserData((prevData) => [...prevData, parsedData.formData]);
    }
    setUserCount(userData.length);
  }, []);

  // Dynamic Labels for Charts
  const userLabels = userData.map((user, index) => `User ${index + 1}`);

  // Chart Data
  const barChartData = {
    labels: userLabels,
    datasets: [
      {
        label: "User Activity",
        data: userData.map(() => Math.floor(Math.random() * 30) + 5),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        hoverBackgroundColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };

  const pieChartData = {
    labels: ["Active", "Inactive"],
    datasets: [
      {
        data: [userCount, Math.max(10 - userCount, 0)],
        backgroundColor: ["#36A2EB", "#FF6384"],
        hoverOffset: 4,
      },
    ],
  };

  const lineChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "User Growth",
        data: [2, 5, 10, 15, 25, userCount, userCount + 5],
        fill: false,
        borderColor: "#4BC0C0",
        tension: 0.4,
      },
    ],
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 3,
        bgcolor: "#f4f6f8",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h3" sx={{ mb: 4, fontWeight: "bold", color: "#333" }}>
        Dashboard
      </Typography>

      <Grid container spacing={3} sx={{ maxWidth: "1200px" }}>
        {/* Total Users Card */}
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              background: "linear-gradient(135deg, #1E88E5, #42A5F5)",
              color: "#fff",
              textAlign: "center",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              height: "180px",
            }}
          >
            <CardContent>
              <Typography variant="h5">Total Users</Typography>
              <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                {userCount}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* User Profile */}
        <Grid item xs={12} sm={4}>
          <Paper
            elevation={6}
            sx={{
              padding: "20px",
              textAlign: "center",
              borderRadius: "12px",
              bgcolor: "#fff",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              height: "180px",
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              User Profile
            </Typography>
            <Typography variant="h6" sx={{ mt: 1, color: "#333" }}>
              Name: {userData[0]?.name || "N/A"}
            </Typography>
            <Typography variant="h6" sx={{ color: "#555" }}>
              Email: {userData[0]?.email || "N/A"}
            </Typography>
            <Typography variant="h6" sx={{ color: "#777" }}>
              Phone: {userData[0]?.phone || "N/A"}
            </Typography>
          </Paper>
        </Grid>

        {/* User Activity Chart */}
        <Grid item xs={12} sm={4}>
          <Paper
            elevation={12}
            sx={{
              padding: "20px",
              borderRadius: "12px",
              bgcolor: "#fff",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              height: "180px",
            }}
          >
            <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold", color: "#333" }}>
              User Activity
            </Typography>
            <Bar data={barChartData} options={{ responsive: true }} />
          </Paper>
        </Grid>

        {/* User Distribution Pie Chart */}
        <Grid item xs={12} sm={6}>
          <Paper
            elevation={10}
            sx={{
              padding: "20px",
              borderRadius: "12px",
              bgcolor: "#fff",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              height: "320px",
            }}
          >
            <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold", color: "#333" }}>
              User Distribution
            </Typography>
            <Pie data={pieChartData} options={{ responsive: true }} />
          </Paper>
        </Grid>

        {/* User Growth Line Chart */}
        <Grid item xs={12} sm={6}>
          <Paper
            elevation={10}
            sx={{
              padding: "20px",
              borderRadius: "12px",
              bgcolor: "#fff",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              height: "320px",
            }}
          >
            <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold", color: "#333" }}>
              User Growth Over Time
            </Typography>
            <Line data={lineChartData} options={{ responsive: true }} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
