import React from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

export default function Slide({ speed, setSpeed }) {
  return (
    <div style={{ width: 300, marginLeft: 25 }}>
      <Typography color="primary" variant="h6" gutterBottom>
        Speed
      </Typography>
      <Slider
        defaultValue={speed}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={50}
        marks
        min={50}
        max={1000}
        onChange={(e, value) => setSpeed(value)}
      />
    </div>
  );
}
