import React, { useState, useEffect } from "react";
import CubeGrid from "./CubeGrid";
import Slider from "./Slider";
import RunStopButton from "./RunStopButton";
import newCube from "../math/NewCube";
import twistCube from "../math/TwistCube";
import { arrayKey, hash } from "../math/Key";

export default function Cube({ stringKey, message }) {
  console.log(stringKey);

  const key = hash("sdgferavb  ");

  console.log(key);
  console.log(arrayKey(key));
  const size = Math.ceil(Math.sqrt(message.length / 6.0));
  const [keyIndex, setKeyIndex] = useState(0);
  const [cube, setCube] = useState(newCube(message, size));
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [speed, setSpeed] = useState(500);

  // start stop effect
  useEffect(() => {
    const handleStart = () => {
      console.log("started");
      // while (keyIndex < key.length) {
      setTimeout(() => {
        twistCube(100, size);
      }, speed);
      // }
    };
    const handleStop = () => {
      console.log("stopped");
    };
    console.log("change");
    isGameRunning ? handleStart() : handleStop();
  });

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", margin: 25 }}>
        <RunStopButton
          isGameRunning={isGameRunning}
          setIsGameRunning={setIsGameRunning}
        />
        <Slider speed={speed} setSpeed={setSpeed} />
      </div>
      <CubeGrid cube={cube} size={size} />
    </div>
  );
}
