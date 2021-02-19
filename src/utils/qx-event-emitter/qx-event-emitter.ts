/**
 * 事件类
 *
 * @export
 * @class QXEventEmitter
 */
export class QXEventEmitter {
  /**
   * 事件组
   *
   * @private
   * @type {Map<string, any[]>}
   * @memberof QXEventEmitter
   */
  private map: Map<string, any[]> = new Map();

  /**
   * 最大事件监听数量
   *
   * @private
   * @type {number}
   * @memberof QXEventEmitter
   */
  private maxListeners: number = 100;

  /**
   * 设置单个事件最大监听数量
   *
   * @param {number} num
   * @memberof QXEventEmitter
   */
  setMaxListeners(num: number): void {
    this.maxListeners = num;
  }

  /**
   * 订阅事件
   *
   * @param {string} name
   * @param {(...args: any[]) => void} fn
   * @memberof QXEventEmitter
   */
  addListener(name: string, fn: (...args: any[]) => void): void {
    if (fn instanceof Function) {
      if (!this.map.has(name)) {
        this.map.set(name, []);
      }
      const events = this.map.get(name);
      if (events.length < this.maxListeners) {
        events.push(fn);
      } else {
        console.warn('事件监听已达最大上限，无法新增监听!');
      }
    } else {
      console.error('回调必须是一个函数!');
    }
  }

  /**
   * 取消订阅
   *
   * @param {string} name
   * @param {(...args: any[]) => void} fn
   * @memberof QXEventEmitter
   */
  removeListener(name: string, fn: (...args: any[]) => void): void {
    if (this.map.has(name)) {
      const events = this.map.get(name);
      if (events.length > 0) {
        for (let i = 0; i < events.length; i++) {
          const item = events[i];
          if (item === fn) {
            events.splice(i, 1);
            break;
          }
        }
      }
    }
  }

  /**
   * 发送事件
   *
   * @param {string} name
   * @param {...any[]} args
   * @memberof QXEventEmitter
   */
  emit(name: string, ...args: any[]): void {
    if (this.map.has(name)) {
      const events = this.map.get(name);
      events.forEach((fn: (...args: any[]) => void) => {
        fn(...args);
      });
    }
  }
}
