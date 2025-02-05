import { useState, useEffect } from "react";
import { Box, Button, Typography, Paper, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import Counter from "../components/Counter";
import UserForm from "../components/UserForm";
import RichTextEditor from "../components/RichTextEditor";
import Dashboard from "../components/Dashboard";
import UserDashboard from "../components/UserDashboard";
import "@fontsource/poppins"; // Import Poppins font

const Home = () => {
  const [selectedComponent, setSelectedComponent] = useState("dashboard");
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
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        backgroundColor: "#f5f5f5",
        fontFamily: "Poppins, sans-serif", // Apply Poppins
      }}
    >
      {/* Sidebar */}
      <Box
        sx={{
          width: "250px",
          height: "100vh",
          backgroundColor: "#1e1e2f",
          color: "#fff",
          padding: "20px",
          position: "fixed",
          left: 0,
          top: 0,
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          fontFamily: "Poppins, sans-serif", // Apply Poppins
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            textTransform: "uppercase",
            textAlign: "center",
            marginBottom: "20px",
            fontFamily: "Poppins, sans-serif", // Apply Poppins
          }}
        >
          Dashboard
        </Typography>

        <List>
          {[
            { label: "User-Details", value: "dashboard" },
            { label: "Counter", value: "counter" },
            { label: "Rich Text Editor", value: "richTextEditor" },
            { label: "User-Form", value: "userForm" },
            { label: "User-Dashboard", value: "userDashboard" },
            
          ].map((item) => (
            <ListItem key={item.value} disablePadding>
              <ListItemButton
  sx={{
    backgroundColor: selectedComponent === item.value ? "#5757a0" : "transparent",
    color: "#fff",
    borderRadius: "8px",
    marginBottom: "8px",
    transition: "0.3s",
    "&:hover": { backgroundColor: "#5757a0" },
    fontFamily: "'Poppins', sans-serif", // Ensure Poppins is being used properly
  }}
  onClick={() => setSelectedComponent(item.value)}
>
  <ListItemText
    primary={
      <Typography sx={{ fontStyle: "italic" }}>{item.label}</Typography>
    }
  />
</ListItemButton>


            </ListItem>
          ))}
        </List>
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          marginLeft: "270px",
          width: "calc(100% - 270px)",
          padding: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Poppins, sans-serif", // Apply Poppins
        }}
      >
        <Paper
          sx={{
            padding: "20px",
            width: "100%",
            maxWidth: "900px",
            minHeight: "500px",
            backgroundColor: "#fff",
            borderRadius: "12px",
            boxShadow: "0px 8px 24px rgba(0,0,0,0.1)",
            fontFamily: "Poppins, sans-serif", // Apply Poppins
          }}
        >
          {selectedComponent === "dashboard" && <Dashboard userData={userData} />}
          {selectedComponent === "counter" && <Counter />}
          {selectedComponent === "richTextEditor" && <RichTextEditor />}
          {selectedComponent === "userForm" && <UserForm />}
          {selectedComponent === "userDashboard" && <UserDashboard />}
        </Paper>
      </Box>
    </Box>
  );
};

export default Home;
