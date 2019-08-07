import React, { Component, useState } from "react";

const newCube = (size, message) => {};

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
