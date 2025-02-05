import { useState, useEffect } from "react";
import { Box, Typography, Paper, Grid, Card, CardContent } from "@mui/material";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register necessary chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [userData, setUserData] = useState([]);
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    // Get saved user data from localStorage
    const savedData = localStorage.getItem("userData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setUserData((prevData) => [...prevData, parsedData.formData]);
    }

    // Update user count
    setUserCount(userData.length);
  }, []);

  // Chart data
  const chartData = {
    labels: ["User 1", "User 2", "User 3"], // Example labels (can be dynamically set)
    datasets: [
      {
        label: "User Activity",
        data: [12, 19, 3], // Example data points (can be based on actual data)
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", p: 3 }}>
      <Typography variant="h3" sx={{ mb: 4 }}>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        {/* User Profile Section */}
        <Grid item xs={12} sm={4}>
          <Paper elevation={12} sx={{ padding: "20px", textAlign: "center" }}>
            <Typography variant="h5">User Profile</Typography>
            <Typography variant="h6" sx={{ mt: 2 }}>Name: {userData[0]?.name}</Typography>
            <Typography variant="h6">Email: {userData[0]?.email}</Typography>
            <Typography variant="h6">Phone: {userData[0]?.phone}</Typography>
          </Paper>
        </Grid>

        {/* User Count Section */}
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="h5" sx={{ mb: 2 }}>
                Total Users
              </Typography>
              <Typography variant="h4">{userCount}</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* User Trends Chart */}
        <Grid item xs={12} sm={4}>
          <Paper elevation={12} sx={{ padding: "20px" }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              User Activity Trends
            </Typography>
            <Bar data={chartData} options={{ responsive: true }} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
