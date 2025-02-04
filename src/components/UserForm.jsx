import { useState, useEffect } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

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
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4, padding: "20px", backgroundColor: "#f0f0f0", borderRadius: "8px" }}>
      <Typography variant="h5" textAlign="center" sx={{ textTransform: "uppercase", color: "black", marginBottom: "20px" }}>User Data Form</Typography>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth label="Name" name="name" value={formData.name || ""} onChange={handleInputChange} sx={{ my: 1 }} />
        <TextField fullWidth label="Address" name="address" value={formData.address || ""} onChange={handleInputChange} sx={{ my: 1 }} />
        <TextField fullWidth label="Email" name="email" value={formData.email || ""} onChange={handleInputChange} sx={{ my: 1 }} />
        <TextField fullWidth label="Phone" name="phone" value={formData.phone || ""} onChange={handleInputChange} sx={{ my: 1 }} />
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
          <Button variant="contained" color="primary" type="submit">Save</Button>
          <Typography variant="body2" sx={{ mt: 1 }}>{isSubmitted ? `User ID: ${userId}` : ""}</Typography>
        </Box>
      </form>
    </Box>
  );
};

export default UserForm;

