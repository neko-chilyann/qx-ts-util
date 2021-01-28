import { clearAll } from './object';

/**
 * 排序测试
 */
describe('util:「ascSort、descSort」', function () {
  it('清空对象', function () {
    const obj = { name: '张三', age: 18 };
    const beforeObj = obj;
    clearAll(obj);
    expect(obj).toEqual({});
    expect(beforeObj === obj).toBe(true);
  });
  it('清空数组', function () {
    const arr = [
      { name: '张三', age: 18 },
      { name: '张易', age: 11 },
    ];
    const beforeArr = arr;
    clearAll(arr);
    expect(arr).toEqual([]);
    expect(beforeArr === arr).toBe(true);
  });
});
