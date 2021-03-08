import { IHookCallItem } from '../interface/i-hook-call-item';

// 参数传递声明
type AsArray<T> = T extends any[] ? T : [T];

/**
 * 串联钩子，按照注册顺序执行
 *
 * @export
 * @class SyncSeriesHook
 * @template T 输入值类型
 * @template C 上下文声明对象
 */
export class SyncSeriesHook<T, C = null> {
  /**
   * 已注册的钩子回调
   *
   * @protected
   * @type {IHookCallItem[]}
   * @memberof SyncSeriesHook
   */
  protected items: IHookCallItem[] = [];

  /**
   * 触发钩子，当某个钩子返回「null」时，中断后续执行。
   *
   * @param {C} context
   * @param {...AsArray<T>} args
   * @return {*}  {C}
   * @memberof SyncSeriesHook
   */
  callSync(context: C, ...args: AsArray<T>): C {
    const _context: C = context || Object.create({});
    let bol: any;
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      if (item.fn) {
        bol = item.fn(_context, ...args);
      }
      if (bol === null) {
        console.warn(`因${item.fn?.name}方法返回值为「null」，钩子中断执行。`, item);
        break;
      }
    }
    return _context;
  }

  /**
   * 注册钩子
   *
   * @param {((...args: AsArray<T>) => void)} fn 回调
   * @memberof SyncSeriesHook
   */
  tap(fn: (context: C, ...args: AsArray<T>) => void): void {
    const opt: IHookCallItem = {
      mode: 'sync',
    };
    opt.fn = fn;
    this.items.push(opt);
  }

  /**
   * 删除钩子注册
   *
   * @param {() => R} callBack
   * @memberof SyncSeriesHook
   */
  removeTap(callBack: (...args: AsArray<T>) => void): void {
    if (callBack) {
      for (let i = 0; i < this.items.length; i++) {
        const item = this.items[i];
        if (callBack === item.fn) {
          this.items.splice(i, 1);
        }
      }
    }
  }
}
