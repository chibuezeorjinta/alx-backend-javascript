export default function cleanSet(inSet, startString) {
  if (startString === undefined || startString.length === 0) {
    return '';
  }
  const slicedStings = Array.from(inSet)
    .filter((value) => (value !== undefined ? value.startsWith(startString) : ''))
    .map((value) => (value !== undefined ? value.slice(startString.length) : ''));

  return slicedStings.join('-');
}
