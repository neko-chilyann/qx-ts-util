/**
 * 正序排序
 *
 * @export
 * @param {any[]} list 需要排序的数据
 * @param {string} [sortField] 排序字段，无排序字段对比本身
 * @return {*}  {any[]}
 */
export function ascSort(list: any[], sortField?: string): any[] {
  return list.sort((a: any, b: any) => {
    const v1 = sortField ? a[sortField] : a;
    const v2 = sortField ? b[sortField] : b;
    if (v1 > v2) {
      return 1;
    } else if (v1 < v2) {
      return -1;
    }
    return 0;
  });
}

/**
 * 倒叙排序
 *
 * @export
 * @param {any[]} list 需要排序的数据
 * @param {string} [sortField] 排序字段，无排序字段对比本身
 * @return {*}  {any[]}
 */
export function descSort(list: any[], sortField?: string): any[] {
  return list.sort((a: any, b: any) => {
    const v1 = sortField ? a[sortField] : a;
    const v2 = sortField ? b[sortField] : b;
    if (v1 < v2) {
      return 1;
    } else if (v1 > v2) {
      return -1;
    }
    return 0;
  });
}
