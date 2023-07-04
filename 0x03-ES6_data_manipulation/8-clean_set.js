export default function cleanSet(inSet, startString) {
  const slicedStings = Array.from(inSet)
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length));

  return slicedStings.join('-');
}
