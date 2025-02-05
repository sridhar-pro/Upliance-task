import { useState, useEffect } from "react";
import { Box, Button, Typography, Paper, List, ListItem, ListItemButton, ListItemText, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Counter from "../components/Counter";
import UserForm from "../components/UserForm";
import RichTextEditor from "../components/RichTextEditor";
import Dashboard from "../components/Dashboard";
import UserDashboard from "../components/UserDashboard";
import { useMediaQuery } from "@mui/material"; // Import for responsiveness
import "@fontsource/poppins"; // Import Poppins font

const Home = () => {
  const [selectedComponent, setSelectedComponent] = useState("dashboard");
  const [userData, setUserData] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false); // Sidebar toggle state

  // Check if the screen width is mobile size
  const isMobile = useMediaQuery("(max-width: 768px)");

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
        fontFamily: "Poppins, sans-serif",
        
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
          position: isMobile ? "fixed" : "static",
          left: menuOpen ? 0 : "-270px", // Slide in/out on mobile
          top: 0,
          transition: "left 0.3s ease",
          zIndex: 1000,
          display: isMobile ? "block" : "flex",
          flexDirection: "column",
          gap: "15px",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            textTransform: "uppercase",
            textAlign: "center",
            marginBottom: "20px",
            fontFamily: "Poppins, sans-serif",
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
                  fontFamily: "'Poppins', sans-serif",
                }}
                onClick={() => {
                  setSelectedComponent(item.value);
                  if (isMobile) setMenuOpen(false); // Close sidebar after selection on mobile
                }}
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

      {/* Toggle Button for Mobile */}
      {isMobile && (
        <IconButton
          sx={{
            position: "fixed",
            top: 20,
            left: 20,
            zIndex: 1100,
            backgroundColor: "#1e1e2f",
            color: "#fff",
            "&:hover": { backgroundColor: "#5757a0" },
          }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <MenuIcon />
        </IconButton>
      )}

      {/* Main Content */}
      <Box
        sx={{
          marginLeft: isMobile ? "-20px" : "200px",
          width: isMobile ? "100%" : "calc(100% - 270px)",
          padding: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <Paper
          sx={{
            padding: "20px",
            width: "100%",
            maxWidth: "900px",
            minHeight: "100px",
            backgroundColor: "#fff",
            borderRadius: "12px",
            boxShadow: "0px 8px 24px rgba(0,0,0,0.1)",
            fontFamily: "Poppins, sans-serif",
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
