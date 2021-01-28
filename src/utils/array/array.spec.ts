import { ascSort, descSort } from './array';

/**
 * 排序测试
 */
describe('util:「ascSort、descSort」', function () {
  it('正序', function () {
    expect(
      ascSort(
        [{ ordervalue: 3 }, { ordervalue: 1 }, { ordervalue: 4 }, { ordervalue: 2 }, { ordervalue: 5 }],
        'ordervalue',
      ),
    ).toEqual([{ ordervalue: 1 }, { ordervalue: 2 }, { ordervalue: 3 }, { ordervalue: 4 }, { ordervalue: 5 }]);
  });
  it('倒叙', function () {
    expect(
      descSort(
        [{ ordervalue: 3 }, { ordervalue: 1 }, { ordervalue: 4 }, { ordervalue: 2 }, { ordervalue: 5 }],
        'ordervalue',
      ),
    ).toEqual([{ ordervalue: 5 }, { ordervalue: 4 }, { ordervalue: 3 }, { ordervalue: 2 }, { ordervalue: 1 }]);
  });
});
