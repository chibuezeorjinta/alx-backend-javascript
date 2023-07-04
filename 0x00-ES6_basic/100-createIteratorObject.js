export default function createIteratorObject(report) {
  let output = [];
  for (const value of Object.values(report.allEmployees)) {
    output = [
      ...output,
      ...value,
    ];
  }
  return output;
}
