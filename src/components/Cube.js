import React, { useState, useEffect } from "react";
import CubeGrid from "./CubeGrid";
import Slider from "./Slider";
import RunStopButton from "./RunStopButton";
import newCube from "../math/NewCube";
import twistCube from "../math/TwistCube";
import { arrayKey, hashKey } from "../math/Key";

export default function Cube({ stringKey, message }) {
  // const key = Array.from({ length: 1000 }, () =>
  //   Math.floor(Math.random() * 40)
  // );
  // const key = props.key;
  console.log(stringKey);

  const key = hashKey("cubeKey");

  // const key = arrayKey(cubeKey);

  console.log(key);

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
