/**
 * 是否已经安装过扩展
 */
(window as any).___ibz___ExtendsInstall = false;

/**
 * 安装基础扩展
 *
 * @export
 * @return {*}
 */
export function ExtendsInstall() {
    if ((window as any).___ibz___ExtendsInstall) {
        return;
    }
    (window as any).___ibz___ExtendsInstall = true;
    // 扩展Object方法，删除所有元素不改变内存地址
    Object.defineProperty(Object.prototype, 'clearAll', {
        writable: false,
        enumerable: false,
        configurable: true,
        value: function () {
            if (this) {
                for (const key in this) {
                    if (this.hasOwnProperty(key)) {
                        delete this[key];
                    }
                }
            }
        },
    });
    // 扩展Array方法，删除所有元素不改变内存地址
    Object.defineProperty(Array.prototype, 'clearAll', {
        writable: false,
        enumerable: false,
        configurable: true,
        value: function () {
            if (this.length) {
                this.splice(0, this.length);
            }
        },
    });
}
