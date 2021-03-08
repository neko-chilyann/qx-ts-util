import { isAsync, isPromise } from '../../utils';
import { IHookCallItem } from '../interface/i-hook-call-item';
import { SyncSeriesHook } from '../sync-series-hook/sync-series-hook';

// 参数传递声明
type AsArray<T> = T extends any[] ? T : [T];

/**
 * 串联钩子，按照注册顺序执行
 *
 * @export
 * @class AsyncSeriesHook
 * @template T 输入值类型
 * @template C 上下文声明对象
 */
export class AsyncSeriesHook<T, C = null> extends SyncSeriesHook<T, C> {
  /**
   * 触发钩子，当某个钩子返回「null」时，中断后续执行。
   *
   * @param {C} context
   * @param {...AsArray<T>} args
   * @return {*}  {Promise<C>}
   * @memberof AsyncSeriesHook
   */
  async call(context: C, ...args: AsArray<T>): Promise<C> {
    const _context: C = context || Object.create({});
    let bol: any;
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      if (item.fn) {
        if (item.mode === 'promise') {
          bol = await item.fn(_context, ...args);
        } else {
          bol = item.fn(_context, ...args);
        }
      }
      if (bol === null) {
        console.warn(`因${item.fn?.name}方法返回值为「null」，钩子中断执行。`, item);
        break;
      }
    }
    return _context;
  }

  /**
   * 注册异步钩子
   *
   * @param {((...args: AsArray<T>) => Promise<void>)} fn 回调
   * @memberof AsyncSeriesHook
   */
  tapPromise(fn: (context: C, ...args: AsArray<T>) => Promise<void>): void {
    const opt: IHookCallItem = {
      mode: 'promise',
    };
    if (isAsync(fn) || isPromise(fn)) {
      opt.fn = fn;
    } else {
      throw new Error('「tapPromise」回调方法类型错误，应为「async」方法或「Promise」对象。');
    }
    this.items.push(opt);
  }

  /**
   * 删除异步钩子注册
   *
   * @param {(...args: AsArray<T>) => Promise<void>} callBack
   * @memberof AsyncSeriesHook
   */
  removeTapPromise(callBack: (...args: AsArray<T>) => Promise<void>): void {
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
