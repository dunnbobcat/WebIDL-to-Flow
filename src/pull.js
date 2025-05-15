// @flow

export default function pull<Value, Key>(
  values: $ReadOnlyArray<Value>,
  keyFn: (Value) => Key,
): {[Key]: Value} {
  const obj = ({}: {[Key]: Value});
  for (const value of values) {
    const key = keyFn(value);
    obj[key] = value;
  }

  return obj;
}
