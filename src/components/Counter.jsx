import { useState } from "react";
import { animated, useSpring } from "react-spring";
import { Button, Box, Typography, Paper } from "@mui/material";

const Counter = () => {
  const [count, setCount] = useState(0);

  const backgroundAnimation = useSpring({
    background: `rgba(255, 165, 100, ${Math.min(count * 0.1, 1)})`,
    config: { tension: 120, friction: 14 },
  });

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(120deg,rgb(255, 255, 255),rgb(255, 255, 255),rgb(255, 242, 233))", // Luxurious gradient background
      }}
    >
      <animated.div
        style={{
          ...backgroundAnimation,
          borderRadius: "15px",
          padding: "2.5rem",
          boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Paper
          elevation={10}
          sx={{
            padding: "2rem",
            width: "350px",
            textAlign: "center",
            borderRadius: "12px",
            background: "rgba(255, 255, 255, 0.2)", // Glass effect
            backdropFilter: "blur(10px)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            color: "#333",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              mb: 2,
              color: "#000",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Counter: {count}
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <Button
              variant="contained"
              onClick={() => setCount(count + 1)}
              sx={{
                background: "#5a3e2b",
                color: "white",
                fontWeight: "bold",
                fontSize: "1.1rem",
                padding: "12px 24px",
                borderRadius: "8px",
                textTransform: "none",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  background: "#4a3424",
                  transform: "scale(1.1)", // Smooth hover effect
                },
              }}
            >
              +
            </Button>
            <Button
              variant="outlined"
              onClick={() => setCount(0)}
              sx={{
                color: "#5a3e2b",
                border: "2px solid #5a3e2b",
                fontWeight: "bold",
                fontSize: "1.1rem",
                padding: "12px 24px",
                borderRadius: "8px",
                textTransform: "none",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  background: "#5a3e2b",
                  color: "white",
                  transform: "scale(1.1)",
                },
              }}
            >
              Reset
            </Button>
            <Button
              variant="contained"
              onClick={() => setCount(count - 1)}
              sx={{
                background: "#5a3e2b",
                color: "white",
                fontWeight: "bold",
                fontSize: "1.1rem",
                padding: "12px 24px",
                borderRadius: "8px",
                textTransform: "none",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  background: "#4a3424",
                  transform: "scale(1.1)", // Smooth hover effect
                },
              }}
            >
              -
            </Button>
          </Box>
        </Paper>
      </animated.div>
    </Box>
  );
};

export default Counter;
