import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button, Box, Typography, Paper } from "@mui/material";
import "@fontsource/poppins"; // Import stylish font

const SignIn = () => {
  const { user, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/"); // Redirect to Home if already logged in
    }
  }, [user, navigate]);

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw", // Fullscreen without scroll
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden", // Prevent scrollbars
        background:
          "linear-gradient(150deg, #f9f9f9, #d4dad6, #afbbb6, #8b9d9b, #698083, #49636f, #2c475c, #142b4e)", // Fullscreen Gradient
      }}
    >
      <Paper
        elevation={10}
        sx={{
          padding: "2rem",
          width: "350px",
          textAlign: "center",
          borderRadius: "15px",
          background: "rgba(255, 255, 255, 0.15)", // Glassmorphism Effect
          backdropFilter: "blur(12px)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
          color: "#fff",
          fontFamily: "Poppins, sans-serif", // Stylish Font
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 2,
            fontFamily: "Poppins, sans-serif",
            color: "#ffffff",
          }}
        >
          Welcome Back
        </Typography>

        <Typography variant="body1" sx={{ mb: 3, fontFamily: "Poppins, sans-serif" }}>
          Sign in to continue
        </Typography>

        <Button
          variant="contained"
          onClick={signInWithGoogle}
          sx={{
            background: "#ffffff",
            color: "#2c475c",
            fontWeight: "bold",
            textTransform: "none",
            padding: "12px 20px",
            borderRadius: "8px",
            fontSize: "16px",
            fontFamily: "Poppins, sans-serif",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              background: "#d4dad6",
              transform: "scale(1.05)", // Smooth hover effect
            },
          }}
        >
          Sign in with Google
        </Button>
      </Paper>
    </Box>
  );
};

export default SignIn;
