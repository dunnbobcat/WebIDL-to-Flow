// @flow

export default function group<T>(
  arr: Array<T>,
  keyFn: (T) => string,
): {[string]: Array<T>} {
  // $FlowFixMe - This way we can use keys like 'constructor'
  const groups = (Object.create(null): {[string]: Array<T>});

  for (const val of arr) {
    const key = keyFn(val);
    if (groups[key] == null) {
      groups[key] = [];
    }

    try {
      groups[key].push(val);
    } catch {
      console.log(groups, key, groups[key]);
    }
  }

  return groups;
}
