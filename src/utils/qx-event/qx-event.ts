import { QXEventEmitter } from '../qx-event-emitter/qx-event-emitter';

/**
 * 事件
 *
 * @export
 * @class QXEvent
 * @template T
 */
export class QXEvent<T> {
  /**
   * 事件初始化
   *
   * @private
   * @type {QXEventEmitter}
   * @memberof QXEvent
   */
  private e: QXEventEmitter;

  /**
   * Creates an instance of QXEvent.
   * @param {number} [maxListeners] 最大单个事件监听个数
   * @memberof QXEvent
   */
  constructor(maxListeners?: number) {
    this.e = new QXEventEmitter();
    // 设置最大监控事件数量
    this.e.setMaxListeners(maxListeners || 300);
  }

  /**
   * 订阅事件
   *
   * @template K
   * @param {K} name
   * @param {(arg?: T[K]) => void} cb
   * @memberof QXEvent
   */
  on<K extends keyof T>(name: K, cb: (arg?: T[K]) => void): void {
    this.e.addListener(name as string, cb);
  }

  /**
   * 取消订阅事件
   *
   * @template K
   * @param {K} name
   * @param {(arg?: T[K]) => void} cb
   * @memberof QXEvent
   */
  off<K extends keyof T>(name: K, cb: (arg?: T[K]) => void): void {
    this.e.removeListener(name as string, cb);
  }

  /**
   * 发送事件
   *
   * @template K
   * @param {K} name
   * @param {T[K]} [arg]
   * @memberof QXEvent
   */
  emit<K extends keyof T>(name: K, arg?: T[K]): void {
    this.e.emit(name as string, arg);
  }
}
