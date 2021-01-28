import { isEmpty, isNil } from 'ramda';

/**
 * 创建 UUID
 *
 * @export
 * @return {*}  {string}
 */
(window as any).___ibz___IDCount = 0;
export function getPrimaryKey(): number {
  return (window as any).___ibz___IDCount++;
}
function S4() {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}
/**
 * 生成唯一标识
 *
 * @export
 * @return {*}  {string}
 */
export function createUUID(): string {
  return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
}

/**
 * 设置cookie
 *
 * @static
 * @param {*} name 名称
 * @param {*} value 值
 * @param {*} day 过期天数
 * @param {boolean} [isDomain=false] 是否设置在主域下
 * @param {string} [path='/'] 默认归属路径
 * @memberof Util
 */
export function setCookie(name: string, value: string, day = 0, isDomain = false, path = '/'): void {
  let domain = '';
  // 设置cookie到主域下
  if (isDomain) {
    // 是否为ip正则
    const regExpr = /^(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)$/;
    // 为ip时忽略
    if (!regExpr.test(location.hostname)) {
      const host = location.hostname;
      if (host.indexOf('.') !== host.lastIndexOf('.')) {
        domain = ';domain=' + host.substring(host.indexOf('.'), host.length);
      }
    }
  }
  // 当设置的时间等于0时，不设置expires属性，cookie在浏览器关闭后删除
  if (day !== 0) {
    const expires = day * 24 * 60 * 60 * 1000;
    const date = new Date(new Date().getTime() + expires);
    document.cookie = `${name}=${escape(value)};path=${path};expires=${date.toUTCString()}${domain}`;
  } else {
    document.cookie = `${name}=${escape(value)};path=${path}${domain}`;
  }
}

/**
 * 清除cookie
 *
 * @static
 * @param {string} cookieName
 * @param {boolean} [isDomain] 是否在主域下
 * @memberof Util
 */
export function clearCookie(cookieName: string, isDomain?: boolean): void {
  setCookie(cookieName, '', -1, isDomain);
}

/**
 * 获取cookie
 *
 * @static
 * @param {string} name
 * @return {*}  {*}
 * @memberof Util
 */
export function getCookie(name: string): string | null {
  const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
  const arr = document.cookie.match(reg);
  if (arr && arr.length > 1) {
    return unescape(arr[2]);
  }
  return null;
}

/**
 * 存在并且不等于空，支持所有数据类型。例：[]、{}都算为空值。
 *
 * @export
 * @param {*} data
 * @return {*}  {boolean}
 */
export function notNilEmpty(data: any): boolean {
  if (!isNil(data) && !isEmpty(data)) {
    return true;
  }
  return false;
}

/**
 * 在当前类型中，不存在或者为空值。例：[]、{}都算为空值。
 *
 * @export
 * @param {*} data
 * @return {*}  {boolean}
 */
export function isNilOrEmpty(data: any): boolean {
  if (isNil(data) || isEmpty(data)) {
    return true;
  }
  return false;
}

/**
 * 默认生成排序值方法
 *
 * @export
 * @param {number} index 所在数据集下标
 * @return {*}  {number}
 */
export function generateOrderValue(index: number): number {
  return (index + 1) * 100;
}
