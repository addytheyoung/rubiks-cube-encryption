export default function newCube(partialMessage, size) {
  const generateFullMessage = () => {
    const cubeSize = size * size * 6;
    if (cubeSize === partialMessage.length) {
      return partialMessage;
    }
    // null character
    partialMessage.push(0);
    // add random characters for remaining length
    for (let i = partialMessage.length; i < cubeSize; i++) {
      partialMessage[i] = String.fromCharCode(Math.random() * 58 + 65);
    }
    return partialMessage;
  };
  const message = generateFullMessage();
  // constructor for grid elements
  function Sticker(character, color) {
    this.character = character;
    this.color = color;
  }
  const cube = [];
  let cubeIndex = 0;
  for (let i = 0; i < size; i++) {
    cube[i] = [];
    for (let j = 0; j < size; j++) {
      cube[i][j] = new Sticker("", "#282828");
    }
    for (let j = size; j < 2 * size; j++) {
      cube[i][j] = new Sticker(message[cubeIndex], "white");
      cubeIndex++;
    }
    for (let j = 2 * size; j < 4 * size; j++) {
      cube[i][j] = new Sticker("", "#282828");
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
    for (let j = 0; j < size; j++) {
      cube[i][j] = new Sticker("", "#282828");
    }
    for (let j = size; j < 2 * size; j++) {
      cube[i][j] = new Sticker(message[cubeIndex], "yellow");
      cubeIndex++;
    }
    for (let j = 2 * size; j < 4 * size; j++) {
      cube[i][j] = new Sticker("", "#282828");
    }
  }
  return cube;
}
