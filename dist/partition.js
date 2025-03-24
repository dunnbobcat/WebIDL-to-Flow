export default function partition(arr, test) {
  const passes = [];
  const fails = [];
  for (const val of arr) {
    if (test(val)) {
      passes.push(val);
    } else {
      fails.push(val);
    }
  }
  return [passes, fails];
}