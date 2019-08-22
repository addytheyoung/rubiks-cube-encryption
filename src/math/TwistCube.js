export default function twistCube(k, size) {
  const totalTypes = 12 * Math.floor(size / 2);
  k %= totalTypes;
  // type range from 0 to 5
  const type = k / (Math.floor(size / 2) * 2);
  console.log("twist ", k);
}
