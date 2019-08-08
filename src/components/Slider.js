import React from "react";

export default function Slider({ speed, onSpeedChange }) {
  const handleChange = e => onSpeedChange(e.target.value);

  return (
    <input
      type="range"
      min="50"
      max="1000"
      step="50"
      value={speed}
      onChange={handleChange}
    />
  );
}
