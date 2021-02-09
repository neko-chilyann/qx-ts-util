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
   * 回调
   *
   * @memberof IHookCallItem
   */
  fn?: ((...args: any[]) => void) | ((...args: any[]) => Promise<void>);
}
