import { useState, useEffect } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";

const UserForm = ({ onUserSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
  });
  const [userId, setUserId] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem("userData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      if (parsedData?.formData) {
        setFormData(parsedData.formData);
        setUserId(parsedData.userId || "");
      }
    } else {
      setUserId(Math.random().toString(36).substr(2, 9));
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { ...formData, userId };
    localStorage.setItem("userData", JSON.stringify({ formData: newUser, userId }));
    setIsSubmitted(true);
    alert("Form submitted!");

    onUserSubmit(newUser); // Update user count in Home.jsx
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(120deg,rgb(255, 255, 255),rgb(255, 255, 255),rgb(255, 242, 233))", // Gradient background
      }}
    >
      <Paper
        elevation={12}
        sx={{
          maxWidth: "600px",
          width: "90%",
          padding: "30px",
          borderRadius: "16px",
          backgroundColor: "rgba(255, 255, 255, 0.8)", // Glassmorphism effect
          backdropFilter: "blur(10px)",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          variant="h4"
          textAlign="center"
          sx={{
            textTransform: "uppercase",
            fontWeight: "bold",
            mb: 3,
            color: "#333",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          User Data Form
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name || ""}
            onChange={handleInputChange}
            sx={{
              my: 2,
              backgroundColor: "#fff",
              borderRadius: "8px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
              },
            }}
          />
          <TextField
            fullWidth
            label="Address"
            name="address"
            value={formData.address || ""}
            onChange={handleInputChange}
            sx={{
              my: 2,
              backgroundColor: "#fff",
              borderRadius: "8px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
              },
            }}
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formData.email || ""}
            onChange={handleInputChange}
            sx={{
              my: 2,
              backgroundColor: "#fff",
              borderRadius: "8px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
              },
            }}
          />
          <TextField
            fullWidth
            label="Phone"
            name="phone"
            value={formData.phone || ""}
            onChange={handleInputChange}
            sx={{
              my: 2,
              backgroundColor: "#fff",
              borderRadius: "8px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
              },
            }}
          />
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 3 }}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{
                padding: "10px 20px",
                background: "#5a3e2b",
                "&:hover": {
                  background: "#4a3424",
                  transform: "scale(1.1)", // Smooth hover effect
                },
                transition: "0.3s ease",
              }}
            >
              Save
            </Button>
            <Typography
              variant="body2"
              sx={{
                mt: 1,
                color: "#555",
                fontFamily: "Poppins, sans-serif",
                fontWeight: "500",
              }}
            >
              {isSubmitted ? `User ID: ${userId}` : ""}
            </Typography>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default UserForm;
