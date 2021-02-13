/**
 * 回调项
 *
 * @export
 * @interface IHookCallItem
 * @template R
 */
export interface IHookCallItem {
  /**
   * 回调方法模式
   *
   * @type {('sync' | 'promise')}
   * @memberof IHookCallItem
   */
  mode: 'sync' | 'promise';
  /**
   * 回调，「当返回值为null时，方法执行断掉后续不执行。」
   *
   * @memberof IHookCallItem
   */
  fn?: (...args: any[]) => void | null | Promise<void | null>;
}
