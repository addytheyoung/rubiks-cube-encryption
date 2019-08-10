import React from "react";
import Button from "@material-ui/core/Button";

export default function runStopButton({ isGameRunning, setIsGameRunning }) {
  return isGameRunning ? (
    <Button
      variant="contained"
      color="secondary"
      onClick={() => setIsGameRunning(false)}
    >
      Stop
    </Button>
  ) : (
    <Button
      variant="contained"
      color="primary"
      onClick={() => setIsGameRunning(true)}
    >
      Start
    </Button>
  );
}
