# large-localstorage

> Safe local storage wrapper for large data. [What is the max size of localStorage values?](https://stackoverflow.com/questions/2989284/what-is-the-max-size-of-localstorage-values)


[![Build Status](https://travis-ci.org/hustcc/large-localstorage.svg?branch=master)](https://travis-ci.org/hustcc/large-localstorage)
[![Coverage Status](https://coveralls.io/repos/github/hustcc/large-localstorage/badge.svg?branch=master)](https://coveralls.io/github/hustcc/large-localstorage?branch=master)
[![npm Version](https://img.shields.io/npm/v/large-localstorage.svg)](https://www.npmjs.com/package/large-localstorage)
[![npm Download](https://img.shields.io/npm/dm/large-localstorage.svg)](https://www.npmjs.com/package/large-localstorage)
[![npm License](https://img.shields.io/npm/l/large-localstorage.svg)](https://www.npmjs.com/package/large-localstorage)


## Usage


 - Install

> npm i --save large-localstorage


 - API
 
API is same with `window.localstorage`.

```ts
import lls from 'large-localstorage';

lls.setItem('string', 'hello world!');
// 50 Mb content
const data = new Array(50 * 1024 * 1024).fill('a').join('');
lls.setItem('large', data);

// will throw
// localStorage.setItem('large-data', data);

lls.getItem('large');

lls.removeItem('string');

lls.clear();
```


## License

MIT@[hustcc](https://github.com/hustcc).
