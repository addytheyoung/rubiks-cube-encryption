export const arrayKey = key => {
  let stringKey = key.toString();
  let remainder = 2466 - stringKey.length;
  if (remainder === -1) {
    stringKey = stringKey.substring(1);
  }
  while (remainder > 0) {
    stringKey = "0" + stringKey;
    remainder--;
  }
  if (stringKey.length !== 2466) {
    throw new Error("Key is " + stringKey.length + " long instead of 2466.");
  }
  let arrayKey = new Array(411);
  let currentInt = "";
  let keyIndex = 0;
  for (let i = 0; i < stringKey.length; i++) {
    if (i % 6 === 0 && i !== 0) {
      arrayKey[keyIndex] = parseInt(currentInt);
      currentInt = "";
      keyIndex++;
    }
    currentInt += stringKey.charAt(i);
  }
  arrayKey[keyIndex] = parseInt(currentInt);
  return arrayKey;
};

export const hashKey = key => {
  var hash = 0,
    i,
    chr;
  if (key.length === 0) return hash;
  for (i = 0; i < key.length; i++) {
    chr = key.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};
