import largeLocalStorage from '../src/';

const MAX = 5 * 1024 * 1024;

function getString(n): string {
  return new Array(n).fill('a').join('');
}

describe('large-localstorage', () => {
  test('min', () => {
    largeLocalStorage.setItem('string', 'min text');
    expect(largeLocalStorage.getItem('string')).toBe('min text');

    largeLocalStorage.setItem('object', { a: 1 });
    expect(largeLocalStorage.getItem('object')).toBe('[object Object]');

    largeLocalStorage.setItem('int', 1);
    expect(largeLocalStorage.getItem('int')).toBe('1');

    largeLocalStorage.setItem('bool', true);
    expect(largeLocalStorage.getItem('bool')).toBe('true');

    largeLocalStorage.setItem('undefined', undefined);
    expect(largeLocalStorage.getItem('undefined')).toBe('undefined');

    largeLocalStorage.setItem('null', null);
    expect(largeLocalStorage.getItem('null')).toBe('null');
  });

  test('max', () => {
    const max = getString(MAX);

    largeLocalStorage.setItem('string', max);
    expect(largeLocalStorage.getItem('string')).toBe(max);

    largeLocalStorage.removeItem('string');
    expect(largeLocalStorage.getItem('string')).toBe(null);

    largeLocalStorage.setItem('string', max);
    largeLocalStorage.clear();
    expect(largeLocalStorage.getItem('string')).toBe(null);
    expect(largeLocalStorage.length).toBe(0);
  });

  test('api', () => {
    const max = getString(MAX);

    largeLocalStorage.clear();

    expect(largeLocalStorage.key(0)).toBe(null);
    expect(largeLocalStorage.length).toBe(0);

    largeLocalStorage.setItem('string', max);
    expect(largeLocalStorage.length).toBe(5);
    expect(largeLocalStorage.getItem('string')).toBe(max);

    const half = max.slice(0, Math.ceil(MAX / 2));
    largeLocalStorage.setItem('string', half);
    expect(largeLocalStorage.length).toBe(3);
    expect(largeLocalStorage.getItem('string')).toBe(half);

    largeLocalStorage.removeItem('string');
    expect(largeLocalStorage.length).toBe(0);

    largeLocalStorage.setItem('string', max);
    largeLocalStorage.clear();
    expect(largeLocalStorage.length).toBe(0);
  });
});
