import { isAsync, isPromise } from '../../utils';
import { IHookCallItem } from '../interface/i-hook-call-item';

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
export class AsyncSeriesHook<T, C = null> {
  /**
   * 已注册的钩子回调
   *
   * @private
   * @type {IHookCallItem[]}
   * @memberof AsyncSeriesHook
   */
  private items: IHookCallItem[] = [];

  /**
   * 触发钩子
   *
   * @param {C} context
   * @param {...AsArray<T>} args
   * @return {*}  {Promise<C>}
   * @memberof AsyncSeriesHook
   */
  async call(context: C, ...args: AsArray<T>): Promise<C> {
    const _context: C = context || Object.create({});
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      if (item.fn) {
        if (item.mode === 'promise') {
          await item.fn(_context, ...args);
        } else {
          item.fn(_context, ...args);
        }
      }
    }
    return _context;
  }

  /**
   * 注册钩子
   *
   * @param {((...args: AsArray<T>) => void)} fn 回调
   * @memberof AsyncSeriesHook
   */
  tap(fn: (context: C, ...args: AsArray<T>) => void): void {
    const opt: IHookCallItem = {
      mode: 'sync',
    };
    opt.fn = fn;
    this.items.push(opt);
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
   * 删除钩子注册
   *
   * @param {() => R} callBack
   * @memberof AsyncSeriesHook
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
