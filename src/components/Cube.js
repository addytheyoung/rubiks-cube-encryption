import React, { Component, useState } from "react";

const newCube = (partialMessage, size) => {
  const message = () => {
    const cubeSize = size * size * 6;
    if (cubeSize === partialMessage.length) {
      return partialMessage;
    }
    // null character
    partialMessage.push(0);
    // add random characters for remaining length
    for (let i = partialMessage.length; i < cubeSize; i++) {
      partialMessage[i] = Math.random() * 58 + 65;
    }
    return partialMessage;
  };

  function Sticker(character, color) {
    // might change to raw later
    this.character = String.fromCharCode(character);
    this.color = color;
  }

  const cube = [];
  let cubeIndex = 0;
  for (let i = 0; i < size; i++) {
    cube[i] = [];
    for (let j = size; j < 2 * size; j++) {
      cube[i][j] = new Sticker(message[cubeIndex], "white");
      cubeIndex++;
    }
  }
  for (let i = size; i < 2 * size; i++) {
    cube[i] = [];
    for (let j = 0; j < size; j++) {
      cube[i][j] = new Sticker(message[cubeIndex], "orange");
      cubeIndex++;
    }
    for (let j = size; j < 2 * size; j++) {
      cube[i][j] = new Sticker(message[cubeIndex], "green");
      cubeIndex++;
    }
    for (let j = 2 * size; j < 3 * size; j++) {
      cube[i][j] = new Sticker(message[cubeIndex], "red");
      cubeIndex++;
    }
    for (let j = 3 * size; j < 4 * size; j++) {
      cube[i][j] = new Sticker(message[cubeIndex], "blue");
      cubeIndex++;
    }
  }
  for (let i = 2 * size; i < 3 * size; i++) {
    cube[i] = [];
    for (let j = size; j < 2 * size; j++) {
      cube[i][j] = new Sticker(message[cubeIndex], "yellow");
      cubeIndex++;
    }
  }
  return cube;
};

const CubeGrid = ({ cube, size }) => {
  const tr = [];
  for (let i = 0; i < 3 * size; i++) {
    const td = [];
    for (let j = 0; j < 4 * size; cube++) {
      td.push(<td key={`${i},${j}`} color={cube[i][j].color} />);
    }
    tr.push(<tr key={r}>{td}</tr>);
  }
  return (
    <table>
      <tbody>{tr}</tbody>
    </table>
  );
};

// const Slider = ({ speed, onSpeedChange }) => {};

export default function Cube(props) {
  const { message } = props;
  const size = Math.ceil(Math.sqrt(message.length / 6.0));
  const [Cube, setCube] = useState(newCube(message, size));

  return (
    <div>
      <CubeGrid cube={Cube} size={size} />
    </div>
  );
}
