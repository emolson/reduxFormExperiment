/**
 * Created by emols on 12/5/2017.
 */

export function required(value, allValues, props, name) {
  // can get allValues to check against other fields
  return value ? undefined : 'Required';
}

export function alphaNumeric(value) {
  return value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined;
}

export function numeric(value) {
  return value && /[^0-9 ]/i.test(value)
    ? 'Only numbers'
    : undefined;
}
