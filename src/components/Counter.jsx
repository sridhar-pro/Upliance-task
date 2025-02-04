import { useState } from "react";
import { animated, useSpring } from "react-spring";
import { Button, Box, Typography } from "@mui/material";

const Counter = () => {
  const [count, setCount] = useState(0);

  const backgroundAnimation = useSpring({
    background: `rgba(255, 100, 100, ${count * 0.1})`,
  });

  return (
    <animated.div style={{ ...backgroundAnimation, padding: "20px" }}>
      {/* Counter Heading - Centered */}
      <Box sx={{ display: "flex", justifyContent: "center", mb: 2, color: "black" }}>
        <Typography variant="h4">COUNTER: {count}</Typography>
      </Box>

      {/* Buttons - Aligned to the left */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        <Button variant="contained" onClick={() => setCount(count + 1)}>
          +
        </Button>
        <Button variant="outlined" onClick={() => setCount(0)}>
          Reset
        </Button>
        <Button variant="contained" onClick={() => setCount(count - 1)}>
          -
        </Button>
      </Box>
    </animated.div>
  );
};

export default Counter;

