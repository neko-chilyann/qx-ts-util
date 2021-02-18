/**
 * 在不改变内存地址的情况下，清空「对象、数组」内的值。
 *
 * @export
 * @param {unknown} data
 */
export function clearAll(data: unknown): void {
  if (data instanceof Array) {
    if (data && data.length > 0) {
      data.splice(0, data.length);
    }
  } else if (data instanceof Object) {
    if (data) {
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          delete data[key];
        }
      }
    }
  }
}
