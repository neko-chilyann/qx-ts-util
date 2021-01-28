import { isNilOrEmpty, notNilEmpty } from './util';

/**
 * 空判断方法测试
 */
describe('util: 「notNilEmpty、isNilOrEmpty」', function () {
  it('值存在，并且不为空', function () {
    expect(notNilEmpty([1, 2, 3])).toBe(true);
    expect(notNilEmpty([])).toBe(false);
    expect(notNilEmpty({ name: '张三', age: 10 })).toBe(true);
    expect(notNilEmpty({})).toBe(false);
    expect(notNilEmpty(null)).toBe(false);
    expect(notNilEmpty(undefined)).toBe(false);
  });
  it('值不存在或者值为空', function () {
    expect(isNilOrEmpty([])).toBe(true);
    expect(isNilOrEmpty({})).toBe(true);
    expect(isNilOrEmpty(null)).toBe(true);
    expect(isNilOrEmpty(undefined)).toBe(true);
  });
});
