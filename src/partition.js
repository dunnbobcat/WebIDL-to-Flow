// @flow

export default function partition<T>(
  arr: Array<T>,
  test: (T) => boolean,
): [Array<T>, Array<T>] {
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
