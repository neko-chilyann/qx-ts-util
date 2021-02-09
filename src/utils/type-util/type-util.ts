/**
 * 指定方法是否为异步方法
 *
 * @export
 * @param {*} fn 需要判断的方法
 * @return {*}  {boolean}
 */
export function isAsync(fn: any): boolean {
  if (Object.prototype.toString.call(fn) === '[object AsyncFunction]') {
    return true;
  }
  return false;
}

/**
 * 是否为Promise对象
 *
 * @export
 * @param {*} obj
 * @return {*}  {boolean}
 */
export function isPromise(obj: any): boolean {
  if (Object.prototype.toString.call(obj) === '[object Promise]') {
    return true;
  }
  return false;
}
