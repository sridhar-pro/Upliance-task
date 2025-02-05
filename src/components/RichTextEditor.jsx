import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Box, Typography, Paper } from "@mui/material";

const RichTextEditor = () => {
  const [content, setContent] = useState("");

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(120deg,rgb(255, 255, 255),rgb(255, 255, 255),rgb(255, 242, 233))", // Luxury gradient
      }}
    >
      <Paper
        elevation={10}
        sx={{
          maxWidth: "700px",
          width: "90%",
          padding: "2rem",
          borderRadius: "12px",
          background: "rgba(255, 255, 255, 0.2)", // Glassmorphism effect
          backdropFilter: "blur(10px)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          variant="h4"
          textAlign="center"
          sx={{
            textTransform: "uppercase",
            fontWeight: "bold",
            mb: 2,
            color: "#000",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Rich Text Editor
        </Typography>

        <Box
          sx={{
            ".ql-editor": {
              minHeight: "200px",
              fontSize: "16px",
              fontFamily: "Poppins, sans-serif",
            },
            ".ql-toolbar": {
              borderRadius: "10px 10px 0 0",
              backgroundColor: "#fff",
              boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
            },
            ".ql-container": {
              borderRadius: "0 0 10px 10px",
              background: "#fff",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            },
          }}
        >
          <ReactQuill
            value={content}
            onChange={setContent}
            theme="snow"
            style={{
              borderRadius: "10px",
              overflow: "hidden",
            }}
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default RichTextEditor;
