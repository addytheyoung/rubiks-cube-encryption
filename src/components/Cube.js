import React, { Component, useState } from "react";

const newCube = (size, partialMessage) => {
  const message = partialMessage => {
    const cubeSize = size * size * 6;
    if (cubeSize === partialMessage.length) {
      return partialMessage;
    }
    // null character
    partialMessage.push(0);
    // add random characters for remaining length
    for (let i = partialMessage.length; i < cubeSize; i++) {
      partialMessage.push(Math.random() * 58 + 65);
    }
    return partialMessage;
  };
};

const CubeGrid = Cube => {
  return <div>eorgnva</div>;
};

// const Slider = ({ speed, onSpeedChange }) => {};

export default function Cube(props) {
  const { size, message } = props;
  const [Cube, setCube] = useState(newCube(size, message));

  return (
    <div>
      <CubeGrid Cube={Cube} />
    </div>
  );
}
