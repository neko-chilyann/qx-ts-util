import { isAsync, isPromise } from './type-util';

describe('type-util工具类', function () {
  it('是否为async方法', function () {
    const fn = function () {};
    const asyncFn = async function () {};
    expect(isAsync(fn)).toBe(false);
    expect(isAsync(asyncFn)).toBe(true);
  });
  it('是否为Promise对象', function () {
    const obj = {};
    const promiseObj = new Promise(() => {});
    expect(isPromise(obj)).toBe(false);
    expect(isPromise(promiseObj)).toBe(true);
  });
});
