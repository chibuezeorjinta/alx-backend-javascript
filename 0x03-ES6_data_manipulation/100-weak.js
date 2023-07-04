export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  if (!weakMap.get(endpoint)) {
    weakMap.set(endpoint, 1);
  } else {
    const total = weakMap.get(endpoint);
    weakMap.set(endpoint, total + 1);
    if (weakMap.get(endpoint) >= 5) {
      throw new Error('Endpoint load is high');
    }
  }
}
