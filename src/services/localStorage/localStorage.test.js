import '@testing-library/jest-dom';

import {
  getFromLocalStorage,
  getParsedValueFromLocalStorage,
  removeFromLocalStorage,
  setValueToLocalStorage,
} from './index';

describe('Testing localStorage services', () => {
  afterEach(() => {
    localStorage.clear();
  });
  test('Able to set value to localStorage', () => {
    const key = 'test-key';
    const val = 'test-val';
    setValueToLocalStorage(key, val);
    expect(getFromLocalStorage(key)).toEqual(val);
  });

  test('Able to remove value to localStorage', () => {
    const key = 'test-key';
    const val = 'test-val';
    setValueToLocalStorage(key, val);
    expect(getFromLocalStorage(key)).toEqual(val);
    removeFromLocalStorage(key);
    expect(getFromLocalStorage(key)).toEqual(null);
  });
  test('Able to get value from localStorage', () => {
    const key = 'test-key';
    const val = 'test-val';
    setValueToLocalStorage(key, val);
    const value = getFromLocalStorage(key);
    expect(getFromLocalStorage(key)).toEqual(value);
  });
  test('Able to get parsed value from localStorage', () => {
    const key = 'test-key';
    const val = [{ data: test }];
    setValueToLocalStorage(key, JSON.stringify(val));
    const value = getParsedValueFromLocalStorage(key);
    expect(JSON.parse(getFromLocalStorage(key))).toEqual(value);
  });
  test('should return null value when local storage is not having value', () => {
    const key = 'test-key';
    const val = [{ data: test }];
    setValueToLocalStorage('test-another-key', JSON.stringify(val));
    const value = getParsedValueFromLocalStorage(key);
    expect(value).toEqual(null);
  });
  test('should return null when the value in localStorage is not a valid JSON Object', () => {
    const key = 'invalid-key';
    const invalidValue = 'not a valid JSON string';
    setValueToLocalStorage(key, invalidValue);
    const result = getParsedValueFromLocalStorage(key);
    expect(result).toBeNull();
  });
});
