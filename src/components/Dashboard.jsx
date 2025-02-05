import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography, Paper } from "@mui/material";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/signin"); // Redirect to sign-in page
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(120deg,rgb(255, 255, 255),rgb(255, 255, 255),rgb(255, 242, 233))", // Gradient Background
      }}
    >
      <Paper
        elevation={10}
        sx={{
          padding: "3rem",
          width: "400px",
          textAlign: "center",
          borderRadius: "15px",
          background: "rgba(255, 255, 255, 0.2)", // Glassmorphism effect
          backdropFilter: "blur(10px)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
          color: "#333",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 2,
            color: "#000000",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Welcome, {user?.displayName || "User"}!
        </Typography>

        <Typography
          variant="h6"
          sx={{
            color: "#555",
            fontSize: "1.1rem",
            fontFamily: "Poppins, sans-serif",
            mb: 3,
          }}
        >
          {user?.email}
        </Typography>

        <Button
          variant="contained"
          onClick={handleLogout}
          sx={{
            background: "#5a3e2b",
            color: "white",
            fontWeight: "bold",
            fontSize: "1rem",
            fontFamily: "Poppins, sans-serif",
            textTransform: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              background: "#4a3424",
              transform: "scale(1.05)", // Smooth hover effect
            },
          }}
        >
          LOGOUT
        </Button>
      </Paper>
    </Box>
  );
};

export default Dashboard;

