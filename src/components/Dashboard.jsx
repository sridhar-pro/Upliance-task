import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";

// 🔹 Register required Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Dashboard = () => {
  const [userData, setUserData] = useState([]);

  // Fetch data from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem("userData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      if (parsedData?.formData) {
        setUserData([parsedData.formData]); // Store user data in state
      }
    }
  }, []);

  const userCount = userData.length; // Get total users

  // Bar Chart Data
  const chartData = {
    labels: ["Users", "Posts", "Messages"],
    datasets: [
      {
        label: "Statistics",
        data: [userCount, 19, 8], // Dynamically update user count
        backgroundColor: ["red", "blue", "green"],
      },
    ],
  };

  return (
    <Box sx={{ maxWidth: "800px", margin: "auto", mt: 4, textAlign: "center" }}>
      <Typography variant="h5" sx={{ mb: 2 }}>📊 Dashboard</Typography>

      {/* Chart Section */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Bar data={chartData} />
      </Paper>

      {/* User Details Table */}
      <Typography variant="h6" sx={{ mb: 2 }}>👤 User Details</Typography>
      {userData.length > 0 ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><b>Name</b></TableCell>
                <TableCell><b>Address</b></TableCell>
                <TableCell><b>Email</b></TableCell>
                <TableCell><b>Phone</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userData.map((user, index) => (
                <TableRow key={index}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.address}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography variant="body1" sx={{ color: "gray" }}>No user data available.</Typography>
      )}
    </Box>
  );
};

export default Dashboard;
