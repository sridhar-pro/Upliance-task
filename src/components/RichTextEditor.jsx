import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Box, Typography } from "@mui/material";

const RichTextEditor = () => {
  const [content, setContent] = useState("");

  return (
    <Box sx={{ maxWidth: "600px", margin: "auto", mt: 4 }}>
      <Typography variant="h4" textAlign="center" sx={{ textTransform: "uppercase" , mb: 2, color: "black" }}>Rich Text Editor</Typography>
      <ReactQuill value={content} onChange={setContent} />
    </Box>
  );
};

export default RichTextEditor;

