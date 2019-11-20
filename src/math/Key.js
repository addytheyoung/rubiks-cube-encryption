// export const arrayKey = key => {
//   let stringKey = key.toString();
//   let remainder = 2466 - stringKey.length;
//   if (remainder === -1) {
//     stringKey = stringKey.substring(1);
//   }
//   while (remainder > 0) {
//     stringKey = "0" + stringKey;
//     remainder--;
//   }
//   if (stringKey.length !== 2466) {
//     throw new Error("Key is " + stringKey.length + " long instead of 2466.");
//   }
//   let arrayKey = new Array(411);
//   let currentInt = "";
//   let keyIndex = 0;
//   for (let i = 0; i < stringKey.length; i++) {
//     if (i % 6 === 0 && i !== 0) {
//       arrayKey[keyIndex] = parseInt(currentInt);
//       currentInt = "";
//       keyIndex++;
//     }
//     currentInt += stringKey.charAt(i);
//   }
//   arrayKey[keyIndex] = parseInt(currentInt);
//   return arrayKey;
// };

export const generateArrayKey = () => {
  
}

export const arrayKey = key => {
  if (key < Math.pow(10, 300)) {
    key *= 10;
  }
  console.log(key);
  const stringKey = key.toString();
  let arrayKey = new Array(100);
  let currentInt = "";
  let keyIndex = 0;
  for (let i = 0; i < 300; i++) {
    if (i % 3 === 2 && i !== 0) {
      arrayKey[keyIndex] = parseInt(currentInt);
      currentInt = "";
      keyIndex++;
    }
    currentInt += stringKey.charAt(i);
  }
  return arrayKey;
};

export const hash = stringKey => {
  let hash = 1;
  const minimum = Math.pow(10, 299);
  let i = 0;
  while (hash < minimum) {
    hash *= 37 + stringKey.charCodeAt(i);
    i++;
    if (i >= stringKey.length) {
      i = 0;
    }
  }
  return hash;
};
