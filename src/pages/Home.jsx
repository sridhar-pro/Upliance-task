import { useState, useEffect } from "react";
import { Box, Grid, Button, Typography, Paper } from "@mui/material";
import Counter from "../components/Counter";
import UserForm from "../components/UserForm";
import RichTextEditor from "../components/RichTextEditor";
import Dashboard from "../components/Dashboard";

const Home = () => {
  const [selectedComponent, setSelectedComponent] = useState("counter");
  const [userData, setUserData] = useState([]);

  // Load data from localStorage when component mounts
  useEffect(() => {
    const savedData = localStorage.getItem("userData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      if (parsedData?.formData) {
        setUserData([parsedData.formData]); // Store user data in state
      }
    }
  }, []);

  return (
    <Box sx={{ backgroundColor: "#f5f5f5", minHeight: "100vh", padding: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Typography variant="h4" sx={{ fontWeight: 600, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "30px", color: "#333" }}>
        Interactive Dashboard
      </Typography>

      <Box sx={{ mb: 5, display: "flex", justifyContent: "center", gap: 2 }}>
        <Button variant="contained" color="primary" onClick={() => setSelectedComponent("counter")}>Show Counter</Button>
        <Button variant="contained" color="secondary" onClick={() => setSelectedComponent("richTextEditor")}>Show Rich Text Editor</Button>
        <Button variant="contained" color="success" onClick={() => setSelectedComponent("userForm")}>Show User Form</Button>
        <Button variant="contained" color="success" onClick={() => setSelectedComponent("dashboard")}>Show Dashboard</Button>
      </Box>

      <Paper sx={{ padding: "20px", maxWidth: "1000px", width: "100%", marginBottom: "20px", backgroundColor: "#fff", borderRadius: "8px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            {selectedComponent === "counter" && <Counter />}
            {selectedComponent === "richTextEditor" && <RichTextEditor />}
            {selectedComponent === "userForm" && <UserForm />}
            {selectedComponent === "dashboard" && <Dashboard userData={userData} />}
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Home;
