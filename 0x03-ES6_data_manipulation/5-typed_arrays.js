export default function createInt8TypedArray(length, position, value) {
  const newArr = new ArrayBuffer(length);
  const int8Edit = new Int8Array(newArr);
  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }
  int8Edit[position] = value;
  return new DataView(newArr);
}
